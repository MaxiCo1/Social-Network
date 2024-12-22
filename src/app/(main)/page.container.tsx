"use client"
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";
import { MessageProvider } from "@/contexts/message.context";
import { UserType } from "@/types/users.type";

type IndexPageContainerProps = {
  initialQuery?: string;
  messagesResponse: PageType<MessageType>;
  currentUser?:UserType
};

const IndexPageContainer = ({
  initialQuery,
  messagesResponse,
  currentUser
}: IndexPageContainerProps) => {
  return (
    <MessageProvider initialPage={messagesResponse}>
      {/*<SearchBar initialQuery={initialQuery} />*/}
      <MessagePostForm currentUser={currentUser}/>
      <MessageFeed />
    </MessageProvider>
  );
};

export default IndexPageContainer;
