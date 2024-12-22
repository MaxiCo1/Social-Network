"use client";

import Message from "@/components/messages/Message";
import MessageList from "@/components/messages/MessageList";
import MessagePostForm from "@/components/messages/MessagePostForm";
import useMessages, { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/users.type";

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
  currentUser?: UserType;
};

const MessageContainer = () => {
  const { message } = useMessages();
  if (!message) return <></>;
  return (
    <section className="flex flex-col mb-8 p-0">
      <Message message={message} />
    </section>
  );
};

const MessagePageContainer = ({
  message,
  repliesPage,
  parentId,
  currentUser,
}: MessagePageProps) => {
  return (
    <MessageProvider initialPage={repliesPage} initialMessage={message}>
      <MessageContainer />
      <section className="flex flex-col mb-8 p-0">
        <MessagePostForm parentId={parentId} currentUser={currentUser} />
      </section>
      <section className="flex flex-col w-full p-0">
        <MessageList />
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
