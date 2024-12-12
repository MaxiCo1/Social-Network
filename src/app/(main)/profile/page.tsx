import UserPageContainerAsync from "@/components/Users/UserPageContainerAsync";
import userAPI from "@/service/users/users.service";
import { headers } from "next/headers";


const ProfilePage = async () => {
  const accessToken = (await headers()).get("x-social-access-token") ?? "";

  const me = await userAPI.getMeInternal(accessToken);

  return <UserPageContainerAsync username={me.username} />;
};

export default ProfilePage;
