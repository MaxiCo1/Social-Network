import UserTabs from "@/components/Users/UserTabs";
import Link from "next/link";
import Image from "next/image";
import userAPI from "@/service/users/users.service";

type UserPageContainerProps = {
  username: string;
};

const UserPageContainerAsync = async ({ username }: UserPageContainerProps) => {
  const userPromise = userAPI.getUsersData(username);
  const userMessagesPromise = userAPI.getUsersMessages(username);
  const userMessagesRepliesPromise = userAPI.getUsersMessagesReplies(username);

  const userFollowersPromise = userAPI.getUsersFollowers(username);
  const userFollowingPromise = userAPI.getUsersFollowing(username);

  const [
    user,
    userMessages,
    userMessagesReplies,
    userFollowers,
    userFollowing,
  ] = await Promise.all([
    userPromise,
    userMessagesPromise,
    userMessagesRepliesPromise,
    userFollowersPromise,
    userFollowingPromise,
  ]);

  return (
    <main className="flex flex-col bg-blacks pt-6 text-white">
      <section className="flex flex-col mb-8 px-20 border-b border-gray-600">
        <div className="flex">
          <div className="text-center mb-4 block relative w-20 h-20">
            <Image
              className="rounded-full"
              src={user.photoUrl}
              alt={user.username}
              sizes="10vw"
              fill
              priority //prioriza la carga de la imagen
            />
          </div>
          <div className="flex-col justify-center flex pl-6">
            <h2 className="mb-1">{user.name}</h2>
            <div className="text-md mb-4 text-gray-400 cursor-pointer">
              @<Link href={`/users/${user.username}`}>{user.username}</Link>
            </div>
          </div>
        </div>
        <div className="mb-4">{user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">{user.followersCount}</span>{" "}
            Seguidores
          </div>
          <div>
            <span className="font-semibold">{user.followingCount}</span>{" "}
            Siguiendo
          </div>
        </div>
      </section>
      <UserTabs
        messages={userMessages.content}
        replies={userMessagesReplies.content}
        followers={userFollowers.content}
        followings={userFollowing.content}
      />
    </main>
  );
};

export default UserPageContainerAsync;
