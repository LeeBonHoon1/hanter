"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useGetRealTimeChart from "@/hooks/use-get-realtime-chart";
import { useRouter } from "next/navigation";
import { IRealtimeChart } from "@/types";
import useGetRecommendedChart from "@/hooks/use-get-recommended-chart";
import RealTimeSkeleton from "./skeletons/reletime-skeleton";

const RealTimeChart = () => {
  const router = useRouter();
  const {
    data: realtimeData,
    isLoading: realtimeLoading,
    error: realtimeError,
  } = useGetRealTimeChart();

  const {
    data: recommendedData,
    isLoading: recommendedLoading,
    error: recommendedError,
  } = useGetRecommendedChart();

  if (realtimeError || recommendedError) router.push("/error");

  const renderChart = (data: IRealtimeChart[]) => (
    <div className="bg-[#212121] p-2 rounded-xl w-full">
      <div className="bg-[#212121] space-y-3 text-white">
        {realtimeLoading || recommendedLoading ? (
          <RealTimeSkeleton />
        ) : (
          <>
            <div className="flex text-white px-4 font-bold">
              <div>실시간 음원차트</div>
            </div>
            {data?.map((item: IRealtimeChart) => (
              <div key={item.id}>
                <div className="flex gap-x-3">
                  <div>{item.id}</div>
                  <div>{item.singer}</div>
                </div>
                <div className="flex gap-x-3 text-slate-400">
                  <div>-</div>
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="py-5"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="grid grid-cols-2 gap-6 place-items-center px-8">
            {renderChart(realtimeData)}
            {renderChart(recommendedData)}
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-2 gap-6 place-items-center px-8">
            {renderChart(realtimeData)}
            {renderChart(recommendedData)}
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RealTimeChart;
