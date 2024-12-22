"use client";
import { MessageType } from "@/types/message.types";
import UserCard, { UserCardLayout } from "../Users/UserCard";
import RepliesCounter from "../counters/RepliesCounter";
import { useRouter } from "next/navigation";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  const router = useRouter();
  return (
    <div className="border-b border-gray-600 py-2 px-20">
      <UserCard user={message.user} layout={UserCardLayout.HORIZONTAL}>
        <div className="flex flex-col">
          <p>{message.message}</p>
          <div className="flex justify-end">
            <RepliesCounter
              count={message.repliesCount}
              onClick={() => {
                router.push(`/messages/${message.id}`);
              }}
            />
          </div>
        </div>
      </UserCard>
    </div>
  );
};

export default Message;
