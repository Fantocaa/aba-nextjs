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
      <section className="font-outfit pb-[23rem] md:pb-0 overflow-hidden">
        {" "}
        {/* Tambahkan overflow-hidden di sini */}
        <div className="md:h-full w-full absolute overflow-hidden">
          {" "}
          {/* Tambahkan overflow-hidden di sini */}
          <div className="relative h-[100dvh] md:h-full overflow-hidden">
            {" "}
            {/* Tambahkan overflow-hidden di sini */}
            <Image
              alt="hero"
              src="/images/DSC07958.JPG"
              className="h-full md:h-[100dvh] lg:h-screen w-full object-cover scale-100"
              width={2560}
              height={2560}
            />
            <div className="absolute top-0 left-0 w-full h-[100dvh] md:h-full bg-blueaba-500 opacity-90"></div>
          </div>
        </div>
        <div className="relative container lg:h-screen lg:grid grid-cols-2 lg:items-center pt-40 md:py-0">
          <div className="text-left ltr:sm:text-left rtl:sm:text-right">
            <p className="md:mt-14 2xl:mt-0 max-w-lg sm:text-xl/relaxed text-white">
              PT. ARMADA BERKAT ANUGERAH
            </p>
            <h1 className="py-4 text-5xl font-syne font-semibold sm:text-7xl/tight text-white 2xl:max-w-2xl lg:leading-[5rem]">
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

          <div className="w-full md:h-full hidden md:block overflow-hidden">
            {" "}
            {/* Tambahkan overflow-hidden di sini */}
            <Image
              src="/images/foto ABA.png"
              alt="person"
              width={2560}
              height={2560}
              className="lg:h-screen object-contain scale-125 2xl:scale-110 lg:-translate-y-8 2xl:-translate-y-6"
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
