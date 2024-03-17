"use client";

import Card from "@/components/card";
import useArtists from "@/hooks/use-get-artists";
import { IArtist } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ArtistSkeleton from "./skeletons/skeleton";

const Artist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useArtists();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (error) router.push("/error");
  return (
    <div className="space-y-14 py-10">
      <span className="text-white font-bold text-lg">추천 아티스트</span>
      <div className="grid grid-cols-2 gap-y-10">
        {isLoading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <ArtistSkeleton key={idx} />
            ))
          : data?.map((item: IArtist) => {
              return (
                <Card source={item.source} name={item.name} key={item.id} />
              );
            })}
      </div>
    </div>
  );
};

export default Artist;
