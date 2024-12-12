import UserPageContainerAsync from "@/components/Users/UserPageContainerAsync";


const UserPage = async ({ params }: { params: { username: string } }) => {
  return <UserPageContainerAsync username={params.username}/>
  
};

export default UserPage;
