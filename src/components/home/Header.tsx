"use client";

import React, { useRef } from "react";
import Image from "next/image";
import AboutShort from "./AboutShort";
interface HeaderProps {
  subline: string; // Tentukan tipe subline sebagai string
}

const Header = ({ subline }: HeaderProps) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="font-outfit">
        <div className="h-full w-full absolute">
          <div className="relative h-full overflow-hidden">
            <Image
              alt="hero"
              src="/images/DSC07958.JPG"
              className="h-[75dvh] md:h-screen w-full object-cover scale-150 overflow-hidden"
              width={2560}
              height={2560}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-blueaba-500 opacity-90"></div>
          </div>
        </div>

        <div className="relative container lg:h-screen lg:grid grid-cols-2 lg:items-center py-44 md:py-0">
          <div className="text-left ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-14 2xl:mt-0 max-w-lg sm:text-xl/relaxed text-white">
              PT. ARMADA BERKAT ANUGERAH
            </p>
            <h1 className="py-4 text-3xl font-syne font-semibold sm:text-7xl/tight text-white 2xl:max-w-2xl lg:leading-[5rem]">
              Moving Your{" "}
              <span className="text-yellowaba-500">Products Across</span> All
              Borders👋
            </h1>

            <p className="max-w-xl sm:text-xl/relaxed text-white">{subline}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-center">
              <button
                onClick={handleClick}
                className="font-semibold block w-full rounded-full bg-yellowaba-500 px-8 py-3 text-darkaba shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500 sm:w-auto"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              src="/images/Group 24.png"
              alt="person"
              width={2560}
              height={2560}
              className="lg:h-[36rem] 2xl:h-[52rem] object-contain lg:translate-y-[4.2rem] 2xl:translate-y-[7.7rem]"
            />
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
