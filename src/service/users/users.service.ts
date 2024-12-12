import { TrendingUserType, UserType } from "@/types/users.type";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import httpInternalApi from "../common/http.internal.service";


class UserAPI {


  getMeInternal = async (accessToken: string): Promise<UserType> =>
    httpInternalApi.httpGet(`/me`,undefined, accessToken);

  getUsersData = async (username: string): Promise<UserType> =>
    httpInternalApi.httpGetPublic(`/users/${username}`);
  getUsersMessages = async (username: string): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(`/users/${username}/messages`);
  getUsersMessagesReplies = async (
    username: string
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(`/users/${username}/messages/replies`);

    getUsersFollowers = async (username: string): Promise<PageType<TrendingUserType>> =>
      httpInternalApi.httpGetPublic(`/users/${username}/followers`);
    getUsersFollowing = async (username: string): Promise<PageType<TrendingUserType>> =>
      httpInternalApi.httpGetPublic(`/users/${username}/following`);
    
}

const userAPI = new UserAPI();
export default userAPI;
