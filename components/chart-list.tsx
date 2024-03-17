"use client";

import { IChart } from "@/types";
import { useRouter } from "next/navigation";

import useGetChart from "@/hooks/use-get-chart";
import ChartItem from "@/components/chart-item";

import { ChevronRight } from "lucide-react";

const Chartlist = () => {
  const router = useRouter();
  const { data } = useGetChart(false);

  return (
    <div className="pt-12 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-xl">음원 차트</span>
        <span className="text-white" onClick={() => router.push("/top100")}>
          <ChevronRight className="cursor-pointer" />
        </span>
      </div>
      {data?.pages.map((chart) => {
        return chart?.data?.slice(0, 10).map((item: IChart) => {
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
  );
};

export default Chartlist;
