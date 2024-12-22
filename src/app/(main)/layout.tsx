import CurrentUser from "@/components/Users/CurrentUser";
import ExploreTrending from "@/components/explore/ExploreTrending";
import ExploreUsers from "@/components/explore/ExploreUsers";
import Menu from "@/components/menu/Menu";
import SearchBar from "@/components/search/SearchBar";
import exploreAPI from "@/service/explore/explore.service";
import userAPI from "@/service/users/users.service";
import { headers } from "next/headers";
import { FC, PropsWithChildren } from "react";

//menu links
const LINKS = [
  { title: "Inicio", href: "/", image: "/home.svg" },
  { title: "Explorar", href: "/explore", image: "/explore.svg" },
  { title: "FAQ", href: "/faq", image: "/faq.svg" },
  { title: "Perfil", href: "/profile", image: "/profile.svg" },
];

const UsersLayout: FC<PropsWithChildren> = async ({ children }) => {
  const hashesPromise = exploreAPI.getTrendingHashtags(0, 3);

  const accessToken = (await headers()).get("x-social-access-token") ?? "";
  const me = accessToken
    ? (await userAPI.getMeInternal(accessToken)) ?? ""
    : "";
  const usersPromise = accessToken
    ? exploreAPI.getMyFollowRecomendations(0, 5, accessToken)
    : exploreAPI.getFollowRecomendations(0, 5);

  const [hashes, users] = await Promise.all([hashesPromise, usersPromise]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-12 gap-4 bg-black px-16">
        <div className="col-span-2 relative mr-4">
          <div className="flex flex-col fixed justify-between h-[95vh]" >
            <Menu links={LINKS} />
            {me && <CurrentUser username={me.username} />}
          </div>
        </div>
        <main className="col-span-6 border-x border-gray-600 p-0">
          {children}
        </main>
        <div className="col-span-4">
          <div className="my-4">
            <SearchBar />
          </div>
          <div className="my-4">
            <ExploreTrending hashes={hashes.content} />
          </div>
          <div className="mb-4">
            <ExploreUsers users={users.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersLayout;
