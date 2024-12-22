import userAPI from "@/service/users/users.service";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../logout/LogoutButton";

type CurrentUserProps = {
  username: string;
};

const CurrentUser = async ({ username }: CurrentUserProps) => {
  const user = userAPI.getUsersData(username);

  return (
    <div className="flex ml-2 text-mb text-white flex-col">
      <div className="flex mb-4">
        <div className="text-center h-full pr-4">
          <Image
            className="rounded-full"
            style={{height:60}}
            src={(await user).photoUrl}
            alt={(await user).username}
            width={60}
            height={60}
            priority //prioriza la carga de la imagen
          />
        </div>
        <div>
          <h3 className="mb-1">{(await user).name}</h3>
          <div className="text-md mb-4 text-gray-400 cursor-pointer">
            @
            <Link href={`/users/${(await user).username}`}>
              {(await user).username}
            </Link>
          </div>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default CurrentUser;
