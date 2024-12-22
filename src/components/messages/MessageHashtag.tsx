import Link from "next/link";
import PostCounter from "../counters/PostCounter";
import { TrendingHashtag } from "@/types/hash.type";

type MessageHashtagProps = {
    hash: TrendingHashtag
}

const MessageHashtag = ({hash}: MessageHashtagProps) => {
  return (
    <div className="text-white flex flex-col justify-start w-[30%]">
      <Link href={`/?query=${hash.hash?.replace("#", "") ?? ""}&type=hash`}>
        <h2 className="font-semibold cursor-pointer p-1 text-xl hover:font-extrabold">{hash.hash}</h2>
      </Link>
      <div className="px-1 text-sm">
        <PostCounter count={hash.count} />
      </div>
    </div>
  );
};

export default MessageHashtag;
