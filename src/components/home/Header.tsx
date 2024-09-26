// Header.js
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AboutShort from "./AboutShort";

const Header = () => {
  const imageSlides = [
    { id: 1, path: "/images/young-man-working-warehouse-with-boxess.jpg" },
    { id: 2, path: "/images/young-man-working-warehouse-with-boxes-_1_.webp" },
    { id: 3, path: "/images/young-man-working-warehouse-with-boxess.jpg" },
  ];

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="h-full absolute"
        >
          <CarouselContent className="h-full">
            {imageSlides.map((slide) => (
              <CarouselItem key={slide.id} className="h-full pl-0">
                <div className="relative h-full">
                  <Image
                    alt="hero"
                    src={slide.path}
                    className="h-[75dvh] md:h-screen w-full object-cover"
                    width={2560}
                    height={2560}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>

        <div className="relative container lg:flex lg:h-screen lg:items-center py-44 md:py-0">
          <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-12 max-w-lg sm:text-xl/relaxed text-white">
              PT. BERLIMPAH ANUGERAH SEJATI
            </p>
            <h1 className="py-4 text-3xl font-bold sm:text-6xl/tight text-white max-w-2xl">
              Putting Your Business at the Top
            </h1>

            <p className="max-w-2xl sm:text-xl/relaxed text-white">
              Kami membawa produk Anda ke seluruh penjuru Indonesia dengan
              layanan distribusi yang handal dan efisien.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-center">
              <button
                onClick={handleClick}
                className="block w-full rounded-full bg-redbas-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-redbas-700 focus:outline-none focus:ring active:bg-redbas-500 sm:w-auto"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutShort ref={ref} />
      </section>
    </>
  );
};

export default Header;
