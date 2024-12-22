import ExploreTabs from "@/components/explore/ExploreTabs";
import exploreAPI from "@/service/explore/explore.service";

const ExplorePage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const hashesPromise = exploreAPI.getTrendingHashtags(0, 20);
  const usersPromise = exploreAPI.getFollowRecomendations(0, 20);
  const [hashes, users] = await Promise.all([hashesPromise, usersPromise]);

  return (
    <main className="flex flex-col">
      <section className="flex flex-col mb-8 p-0 py-6">
        <ExploreTabs
          hashtags={hashes}
          users={users}
          initialTab={searchParams?.type}
        />
      </section>
    </main>
  );
};

export default ExplorePage;
