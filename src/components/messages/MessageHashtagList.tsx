import exploreAPI from "@/service/explore/explore.service";
import { TrendingHashtag } from "@/types/hash.type";
import { PageType } from "@/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MessageHashtag from "./MessageHashtag";

type MessageHashtagListProps = {
  initialPage: PageType<TrendingHashtag>;
};

const MessageHashtagList = ({ initialPage }: MessageHashtagListProps) => {
  const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage);
  const [hashtags, setHashtags] = useState<TrendingHashtag[]>(
    initialPage.content
  );

  const fetchData = async () => {
    const pageNumber = page.pagination.page + 1;
    const response = await exploreAPI.getTrendingHashtags(pageNumber, 20);
    setPage(response);
    setHashtags([...hashtags, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreAPI.getTrendingHashtags(0, 10);
    setPage(response);
    setHashtags(response.content);
  };
  const randomTendenc = (maxLength: number, actualNumber: number) => {
    const min = 0;
    const max = maxLength;
    const randomNros = [];
    while (randomNros.length < maxLength / 2) {
      const random = Math.floor(Math.random() * (max - min)) + min;
      if (randomNros.indexOf(random) === -1) {
        randomNros.push(random);
      }
    }
    if (randomNros.includes(actualNumber)) {
      return <p className="text-gray-400 text-xs">Tendencia en el Tatooine</p>;
    } else {
      return <p className="text-gray-400 text-xs">Tendencia en el Universo</p>;
    }
  };

  return (
    <InfiniteScroll
      dataLength={hashtags.length} //This is important field to render the next data
      next={fetchData}
      hasMore={!page.pagination.last}
      loader={<h4>Cargando mensajes...</h4>}
      endMessage={
        <p style={{ textAlign: "center", color: "white", width: "100%" }}>
          <b>Ups! No hay mas mensajes</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>
          &#8595; Arrastra hacia abajo para refrescar
        </h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Suelta para refrescar</h3>
      }
    >
      {hashtags.map((hash, index) => (
        <div className="my-4" key={index}>
          {randomTendenc(hashtags.length, index)}

          <MessageHashtag hash={hash} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default MessageHashtagList;
