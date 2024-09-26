"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Contact from "./Contact";

const Header = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="relative h-full">
              <Image
                alt="hero"
                src="/images/man-safety-equipment-work.jpg"
                className="h-screen w-full object-cover"
                width={2560}
                height={2560}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="relative container lg:flex lg:h-screen lg:items-center">
          <div className="max-w-screen-md text-left ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-12 max-w-lg sm:text-xl/relaxed text-white">
              About Us
            </p>
            <h1 className="py-4 text-3xl font-bold sm:text-6xl/tight text-white">
              Leading the Way in Distribution Excellence
            </h1>

            <p className="max-w-2xl sm:text-xl/relaxed text-white">
              Kami berkomitmen untuk memberikan layanan distribusi terbaik
              dengan jaringan luas dan teknologi terkini.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-center">
              <button
                onClick={handleClick}
                className="flex items-center gap-2 w-full rounded-full bg-redbas-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-redbas-700 focus:outline-none focus:ring active:bg-redbas-500 sm:w-auto"
              >
                Write Message for Us
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <AboutFull ref={ref} /> */}
        <Contact ref={ref} />
      </section>
    </>
  );
};

export default Header;
