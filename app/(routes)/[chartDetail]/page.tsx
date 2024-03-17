"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { IChart } from "@/types";
import useGetChart from "@/hooks/use-get-chart";

import ChartItem from "@/components/chart-item";
import ChartSkeleton from "@/components/skeletons/chart-skeleton";

const ChartDetail = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useGetChart(true);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="px-4">
      <p className="text-white font-bold text-xl">음원차트 Top 100</p>
      <div className="py-5">
        {isLoading || isFetching
          ? Array.from({ length: 25 }).map((_, idx) => (
              <ChartSkeleton key={idx} />
            ))
          : data?.pages.map((chart) => {
              return chart?.data?.map((item: IChart) => {
                return (
                  <ChartItem
                    name={item.name}
                    album={item.album}
                    id={item.id}
                    key={item.id}
                  />
                );
              });
            })}
      </div>
      {!isLoading && <div ref={ref} />}
    </div>
  );
};

export default ChartDetail;
