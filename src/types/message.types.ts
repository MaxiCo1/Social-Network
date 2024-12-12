import { UserType } from "./users.type";

export type MessageType = {
  user: UserType
  message: string;
  repliesCount:number
  id: string;
};
