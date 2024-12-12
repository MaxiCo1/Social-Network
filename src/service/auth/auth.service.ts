import { RedisClientType, createClient } from "redis";
import { AccessDeniedError } from "../common/errors";

import { v4 as uuidv4 } from "uuid";
import authAPI from "./auth.api";
import { AuthResponsenType, LoginResponsenType } from "@/types/auth.types";

const TEN_MINUTE = 60 * 10;

class AuthService {
  private client: RedisClientType;
  constructor() {
    this.client = createClient({
      url: "redis://default:SocialNetworkPass@localhost:6379",
    });

    this.client.connect().then(() => {
      console.log("connected to redis");
    });
  }

  async authenticate(
    username: string,
    password: string
  ): Promise<AuthResponsenType> {
    const loginResponse = await authAPI.loginInternal(username, password);
    return this.buildAuthResponse(loginResponse);
  }

  async register(
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<AuthResponsenType> {
    const loginResponse = await authAPI.registerInternal(
      username,
      password,
      name,
      photoUrl
    );
    return this.buildAuthResponse(loginResponse);
  }

  buildAuthResponse(loginResponse: LoginResponsenType): AuthResponsenType {
    const sessionId = uuidv4();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + TEN_MINUTE * 1000).getTime();
    this.client.set(sessionId, loginResponse.accessToken, { EX: TEN_MINUTE });
    return {
      sessionId: sessionId,
      expiresAt: expiresAt,
      user: loginResponse.user,
    };
  }

  async getAccessToken(sessionId?: string): Promise<string> {
    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore");
    const accessToken = await this.client.get(sessionId);
    if (!accessToken)
      throw new AccessDeniedError("Session ID is not valid anymore");
    return accessToken;
  }

  async getRedisValue(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async logout(sessionId: string): Promise<void> {
    await this.client.del(sessionId);
  }
}

const authService = new AuthService();
export default authService;
