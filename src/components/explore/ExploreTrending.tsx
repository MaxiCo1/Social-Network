import Link from "next/link";
import { TrendingHashtag } from "@/types/hash.type";
import MessageHashtag from "../messages/MessageHashtag";

type ExploreTrendingProps = {
  hashes: TrendingHashtag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return <></>;
  return (
    <div className="rounded-lg px-8 py-4 text-white border border-gray-600" style={{ minWidth: 250 }}>
      <h2 className="mb-2">Tendencia</h2>
      {hashes.slice(0, 2).map((hash, index) => (
        <div className="mb-4" key={index}>
          <MessageHashtag hash={hash} />
        </div>
      ))}
      {hashes.length > 2 && (
        <Link href="/explore?type=HASHTAGS">
          <div className="text-center link-primary">Ver mas</div>
        </Link>
      )}
    </div>
  );
};

export default ExploreTrending;
