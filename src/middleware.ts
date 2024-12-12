import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { AccessDeniedError } from "./service/common/errors";
import authAPI from "./service/auth/auth.api";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  try {
    const sessionId = (await cookieStore).get("SocialSessionID")?.value ?? "";

    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore");
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken)
      throw new AccessDeniedError("Session ID is not valid anymore");

    return getAuthenticationHeaders(request, accessToken);
  } catch (e) {
    if (e instanceof AccessDeniedError) {
      if (!request.url.endsWith("/profile")) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authAPI.getRedisValue(sessionId)).value;
};

const getAuthenticationHeaders = (request: NextRequest, accesToken: string) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-social-access-token", accesToken);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

export const config = {
  matcher: ["/", "/messages/:path*", "/profile", "/api/proxy/:path*"],
};
