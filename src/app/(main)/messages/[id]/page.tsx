import messageApi from "@/service/messages/messages.service";
import MessagePageContainer from "./page.container";
import userAPI from "@/service/users/users.service";
import { headers } from "next/headers";

const MessagePage = async ({ params }: { params: { id: string } }) => {

  const accessToken = (await headers()).get("x-social-access-token") ?? null;
  const currentUser = accessToken ? await userAPI.getMeInternal(accessToken) : undefined;

  const repliesPagePromise = await messageApi.getMessagesReplies(
    params.id,
    0,
    10
  );

  const messagePromise = messageApi.getMessage(params.id);

  const [repliesPage, message] = await Promise.all([
    repliesPagePromise,
    messagePromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <MessagePageContainer
        message={message}
        repliesPage={repliesPage}
        parentId={params.id}
        currentUser={currentUser}
      />
    </main>
  );
};

export default MessagePage;
