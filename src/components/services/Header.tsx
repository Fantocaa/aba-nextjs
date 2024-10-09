// "use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Navigation-Bar");
  return (
    <>
      <section>
        <div className="pb-8 md:pb-0">
          <div className="absolute w-full">
            <div className="relative h-full">
              <Image
                alt="hero"
                src="/images/DSC07958.JPG"
                className="h-[50dvh] md:h-[60dvh] 2xl:h-[50dvh] w-full object-cover"
                width={2560}
                height={2560}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blueaba-500 opacity-90"></div>
            </div>
          </div>
        </div>

        <div className="relative container lg:flex lg:h-[60dvh] 2xl:h-[50dvh] lg:items-center py-40 md:py-0 justify-center">
          <p className="mt-8 md:mt-12 max-w-lg text-5xl md:text-6xl/relaxed text-white">
            {t("service")}
          </p>
        </div>
      </section>
      {/* <section><AboutFull ref={ref} /></section> */}
    </>
  );
};

export default Header;
