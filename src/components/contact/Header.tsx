// "use client";

import React, { useRef } from "react";
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
import Link from "next/link";
import Contact from "./Contact";
import { useTranslations } from "next-intl";

const Header = () => {
  // const ref = useRef<null | HTMLDivElement>(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const t = useTranslations("Contact");

  const subline = t("subtitle");
  const title = t("title");

  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="relative h-full">
              <Image
                alt="hero"
                src="/images/DSC07958.JPG"
                className="h-[75dvh] 2xl:h-[50dvh] w-full object-cover"
                width={2560}
                height={2560}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blueaba-500 opacity-90"></div>
            </div>
          </div>
        </div>

        <div className="relative container lg:flex lg:h-[75dvh] 2xl:h-[50dvh] lg:items-center py-44 md:py-0 justify-center">
          {/* <div className="max-w-screen-md text-left ltr:sm:text-left rtl:sm:text-right"> */}
          <p className="mt-12 max-w-lg sm:text-6xl/relaxed text-white">
            {t("title")}
          </p>
        </div>
      </section>
      <section>
        {/* <AboutFull ref={ref} /> */}
        <Contact
          subline={subline}
          title={title}
          // ref={ref}
        />
      </section>
    </>
  );
};

export default Header;
