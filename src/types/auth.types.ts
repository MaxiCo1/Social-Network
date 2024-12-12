import { UserType } from "./users.type";

export type LoginResponsenType = {
  accessToken: string;
  user: UserType;
};

export type AuthResponsenType = {
  sessionId: string;
  expiresAt: number;
  user: UserType;
};

export type RedisResponsenType = {
  value: string;
};
