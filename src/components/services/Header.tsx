// "use client";

import React from "react";
import Image from "next/image";
// import AboutFull from "./AboutFull";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="relative h-full">
              <Image
                alt="hero"
                src="/images/man-safety-equipment-work.jpg"
                className="h-[75dvh] 2xl:h-[50dvh] w-full object-cover"
                width={2560}
                height={2560}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blueaba-500 opacity-90"></div>
            </div>
          </div>
        </div>

        <div className="relative container lg:flex lg:h-[75dvh] 2xl:h-[50dvh] lg:items-center py-44 md:py-0 justify-center">
          <p className="mt-12 max-w-lg sm:text-6xl/relaxed text-white">
            Services
          </p>
        </div>
      </section>
      <section>{/* <AboutFull ref={ref} /> */}</section>
    </>
  );
};

export default Header;