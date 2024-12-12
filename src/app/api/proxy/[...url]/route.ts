import { headers } from "next/headers";
import httpInternalApi from "@/service/common/http.internal.service";

export async function GET(request: Request) {
  const url = request.url.split("/proxy")[1];
  const accessToken = (await headers()).get("x-social-access-token");

  //TODO fix URL params for get Proxy

  const response = await httpInternalApi.httpGet(
    url,
    undefined,
    accessToken ?? undefined
  );

  return new Response(JSON.stringify(response), {
    status: 200,
  });
}

export async function POST(request: Request) {
  const url = request.url.split("/proxy")[1];
  const accessToken = (await headers()).get("x-social-access-token");
  const body = await request.json();
  /*
  console.log(
    JSON.stringify({
      url: url,
      accessToken: accessToken,
      body: body,
    })
  );*/
  const response = await httpInternalApi.httpPost(
    url,
    body,
    accessToken ?? undefined
  );

  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
