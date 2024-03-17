"use client";

import { INews } from "@/types";
import useGetNews from "@/hooks/use-get-news";

import NewsCard from "@/components/news-card";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const { data, hasNextPage, fetchNextPage, isFetching, isLoading } =
    useGetNews();

  const showMoreHandler = async () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <div className="py-10 space-y-5">
      <div className="font-bold text-white text-xl">뉴스</div>
      {data?.pages.map((news) => {
        return news?.data.map((item: INews) => {
          return (
            <NewsCard
              title={item.title}
              description={item.description}
              key={item.id}
            />
          );
        });
      })}
      {hasNextPage && (
        <div className="flex items-center">
          <Button
            className="text-white cursor-pointer bg-transparent m-auto hover:bg-transparent"
            disabled={isFetching || isLoading}
          >
            <ChevronDown onClick={showMoreHandler} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default News;
