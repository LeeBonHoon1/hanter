"use client";

import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BannerList } from "@/const/banner-list";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      className="py-10"
    >
      <CarouselContent>
        {BannerList.map((item) => (
          <CarouselItem key={item.id}>
            <a href={item.link} target="_blank">
              <Image
                src={`/${item.source}`}
                alt="bannerImage"
                width={1900}
                height={1900}
                className="rounded-2xl"
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
