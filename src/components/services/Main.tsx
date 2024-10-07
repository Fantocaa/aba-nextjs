import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Main() {
  const t = useTranslations("Services-Home");
  const WhyChooseUs = [
    {
      id: 1,
      title: t("title-1"),
      subline: t("subline-1"),
      path: "/images/DSC07961.JPG",
      icon: "/images/long.svg",
    },
    {
      id: 2,
      title: t("title-2"),
      subline: t("subline-2"),
      path: "/images/DSC07983.JPG",
      icon: "/images/short.svg",
    },
    {
      id: 3,
      title: t("title-3"),
      subline: t("subline-3"),
      path: "/images/DSC07985.JPG",
      icon: "/images/big.svg",
    },
    {
      id: 4,
      title: t("title-4"),
      subline: t("subline-4"),
      path: "/images/DSC07934.JPG",
      icon: "/images/small.svg",
    },
    {
      id: 5,
      title: t("title-5"),
      subline: t("subline-5"),
      path: "/images/DSC07930.JPG",
      icon: "/images/all.svg",
    },
  ];

  return (
    <>
      <section className="container">
        <div className="my-16">
          <div className="md:text-center flex flex-col items-center mb-12">
            <h1 className="font-semibold text-5xl font-syne pr-4">
              {t("title")}
            </h1>
            <p className="max-w-3xl pt-4 text-lg">{t("subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            {WhyChooseUs.slice(0, 2).map((slide, index) => (
              <div key={slide.id}>
                <div className="group relative block overflow-hidden rounded-xl bg-blueaba-500 hover:bg-yellowaba-500 transition-all duration-500">
                  <div className="relative h-64">
                    <Image
                      src={slide.path}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 opacity-30"
                    />
                    <div className="absolute inset-y-0 left-6 md:left-8 flex items-center justify-center max-w-72">
                      <div>
                        {/* <Image src={slide.icon} alt={`icon ${index + 1}`} width={64} height={64}/> */}
                        <h1 className="text-3xl text-white font-semibold group-hover:text-gray-900 transition-all duration-500">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-white max-w-md py-4 group-hover:text-gray-900 transition-all duration-500">
                          {slide.subline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center pt-4 w-full">
            {WhyChooseUs.slice(2).map((slide, index) => (
              <div key={slide.id}>
                <div className="group relative block overflow-hidden rounded-xl bg-blueaba-500 hover:bg-yellowaba-500 transition-all duration-500 ">
                  <div className="relative h-64">
                    <Image
                      src={slide.path}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 opacity-30"
                    />
                    <div className="absolute inset-y-0 left-6 md:left-8 flex items-center justify-center max-w-xs w-full">
                      <div>
                        <h1 className="text-3xl text-white font-semibold group-hover:text-gray-900 transition-all duration-500">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-white max-w-md py-4 group-hover:text-gray-900 transition-all duration-500">
                          {slide.subline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
