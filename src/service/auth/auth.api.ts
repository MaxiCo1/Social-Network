import httpExternalApi from "../common/http.external.service";
import httpInternalApi from "../common/http.internal.service";

import { LoginResponsenType, RedisResponsenType } from "@/types/auth.types";

class AuthAPI {
  loginInternal = async (
    username: string,
    password: string
  ): Promise<LoginResponsenType> =>
    httpInternalApi.httpPostPublic(`/auth/login`, {
      username: username,
      password: password,
    });

  registerInternal = async (
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<LoginResponsenType> =>
    httpInternalApi.httpPostPublic(`/auth/register`, {
      username,
      password,
      name,
      photoUrl,
    });

  login = async (
    username: string,
    password: string
  ): Promise<LoginResponsenType> =>
    httpExternalApi.httpPost(`/auth/login`, {
      username: username,
      password: password,
    });

  register = async (
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<LoginResponsenType> =>
    httpExternalApi.httpPost(`/auth/register`, {
      username,
      password,
      name,
      photoUrl,
    });
  logout = async (): Promise<LoginResponsenType> =>
    httpExternalApi.httpPost(`/auth/logout`, {});

  getRedisValue = async (key: string): Promise<RedisResponsenType> =>
    httpExternalApi.httpGet(
      `/redis`,
      new URLSearchParams({ key: key }),
      process.env.REDIS_API_TOKEN
    );
}

const authAPI = new AuthAPI();
export default authAPI;
