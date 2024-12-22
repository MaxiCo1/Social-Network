"use client";
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType } from "@/types/users.type";

enum TabView {
  MESSAGES,
  REPLIES,
  FOLLOWERS,
  FOLLOWING,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
  followings: TrendingUserType[];
  followers: TrendingUserType[];
};

const UserTabs = ({
  messages,
  replies,
  followers,
  followings,
}: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <div className="w-full">
      <div className="flex justify-evenly mb-4 w-full">
        <div
          className={`cursor-pointer ${
            tab === TabView.MESSAGES ? "border-b-4 border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.MESSAGES)}
        >
          Mensajes
        </div>
        <div
          className={`cursor-pointer ${
            tab === TabView.REPLIES ? "border-b-4 border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.REPLIES)}
        >
          Respuestas
        </div>
        <div
          className={`cursor-pointer ${
            tab === TabView.FOLLOWERS ? "border-b-4 border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.FOLLOWERS)}
        >
          Seguidores
        </div>
        <div
          className={`cursor-pointer ${
            tab === TabView.FOLLOWING ? "border-b-4 border-blue-400" : ""
          }`}
          onClick={() => setTab(TabView.FOLLOWING)}
        >
          Siguiendo
        </div>
      </div>
      <div className="flex w-full flex-col">
        {tab === TabView.MESSAGES && (
          <>
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <Message key={index} message={message} />
              ))
            ) : (
              <p className="text-white w-full text-center font-semibold">
                No hay mensajes
              </p>
            )}
          </>
        )}
        {tab === TabView.REPLIES && (
          <>
            {replies.length > 0 ? (
              replies.map((message, index) => (
                <Message key={index} message={message} />
              ))
            ) : (
              <p className="text-white w-full text-center font-semibold">
                No hay respuestas
              </p>
            )}
          </>
        )}
        {tab === TabView.FOLLOWERS && (
          <>
            {followers.length > 0 ? (
              followers.map((user, index) => (
                <UserCard
                  user={user}
                  key={index}
                  layout={UserCardLayout.VERTICAL}
                />
              ))
            ) : (
              <p className="text-white w-full text-center font-semibold">
                No hay seguidores
              </p>
            )}
          </>
        )}
        {tab === TabView.FOLLOWING && (
          <>
            {followings.length > 0 ? (
              followings.map((user, index) => (
                <UserCard
                  user={user}
                  key={index}
                  layout={UserCardLayout.VERTICAL}
                />
              ))
            ) : (
              <p className="text-white w-full text-center font-semibold">
                No estás siguiendo a nadie
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserTabs;
