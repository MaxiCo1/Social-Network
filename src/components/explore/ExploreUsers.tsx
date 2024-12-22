import Link from "next/link";
import { TrendingUserType } from "@/types/users.type";
import UserCard, { UserCardLayout } from "../Users/UserCard";

type ExploreUsersProps = {
  users: TrendingUserType[];
};

const ExploreUsers = ({ users }: ExploreUsersProps) => {
  if (!users || users.length === 0) return <></>;
  return (
    <>
      <div
        className="rounded-lg px-8 py-4 border border-gray-600"
        style={{ minWidth: 250 }}
      >
        <h2 className="mb-2 text-white">A quien seguir</h2>
        {users.slice(0, 4).map((user, index) => (
          <UserCard user={user} key={index} layout={UserCardLayout.VERTICAL}/>
        ))}
        {users.length > 4 && (
          <Link href="/explore?type=USERS">
            <div className="text-center link-primary">Ver mas</div>
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreUsers;
