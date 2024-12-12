import { PageType } from "@/types/pagination.types";
import { TrendingHashtag } from "@/types/hash.type";
import { TrendingUserType } from "@/types/users.type";
import httpInternalApi from "../common/http.internal.service";

class ExploreAPI {
  getTrendingHashtags = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingHashtag>> =>
    httpInternalApi.httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  getFollowRecomendations = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingUserType>> =>
    httpInternalApi.httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  getMyFollowRecomendations = async (
    page: number,
    size: number,
    accessToken: string
  ): Promise<PageType<TrendingUserType>> =>
    httpInternalApi.httpGet(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` }),
      accessToken
    );
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;
