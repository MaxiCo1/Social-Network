import { TrendingUserType, UserType } from "@/types/users.type";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export enum UserCardLayout {
  HORIZONTAL,
  VERTICAL,
}

const divClasses = {
  [UserCardLayout.HORIZONTAL]: "flex",
  [UserCardLayout.VERTICAL]: "flex flex-col",
};

const linkClasses = {
  [UserCardLayout.HORIZONTAL]:
    "ml-2 text-mb text-gray-400 cursor-pointer pl-2 pb-2",
  [UserCardLayout.VERTICAL]: "text-mb text-gray-400 cursor-pointer",
};

type UserCardProps = PropsWithChildren & {
  user: TrendingUserType | UserType;
  layout: UserCardLayout;
};

const UserCard = ({ user, layout, children }: UserCardProps) => {
  return (
    <div className="grid grid-cols-12 mb-4">
      <div className="w-full h-full mt-1 text-center mb-4 relative col-span-2 flex items-center justify-center">
        <Image
          className="rounded-full"
          style={{ height: 60 }}
          src={user.photoUrl}
          alt={user.username}
          width={60}
          height={60}
          priority //prioriza la carga de la imagen
        />
      </div>

      <div className="flex flex-col ml-4 mt-2 col-span-10 text-white justify-center">
        <div className={divClasses[layout]}>
          <h3 className="font-bold">{user.name}</h3>

          <div className={linkClasses[layout]}>
            @<Link href={`/users/${user.username}`}>{user.username}</Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserCard;
