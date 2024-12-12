"use client";
import { TrendingHashtag } from "@/types/hash.type";
import { TrendingUserType } from "@/types/users.type";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import UserList from "../Users/UserList";
import { PageType } from "@/types/pagination.types";
import MessageHashtagList from "../messages/MessageHashtagList";

enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: PageType<TrendingHashtag>;
  users: PageType<TrendingUserType>;
  initialTab?: string;
};

const UserTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<TabView>(
    initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS
  );

  useEffect(() => {
    const type = searchParams.get("type");
    setTab(type ? TabView[type as keyof typeof TabView] : tab);
  }, [searchParams, tab]);

  return (
    <div>
      <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
          <div
            className={`cursor-pointer ${
              tab === TabView.HASHTAGS ? "border-b-4 border-blue-400" : ""
            }`}
          >
            Hashtags
          </div>
        </Link>
        <Link href="/explore?type=USERS">
          <div
            className={`cursor-pointer ${
              tab === TabView.USERS ? "border-b-4 border-blue-400" : ""
            }`}
          >
            Usuarios
          </div>
        </Link>
      </div>
      <div>
        {/*EN CASO DE TENER MAS DE DOS SE PUEDE UTILIZAR EL LO UTILIZADO EN USERCARD PARA LAS CLASES (UTILIZANDO ENUM) */}
        {tab === TabView.HASHTAGS && <MessageHashtagList initialPage={hashtags}/>}
        {tab === TabView.USERS && <UserList initialUserPage={users} />}
      </div>
    </div>
  );
};

export default UserTabs;
