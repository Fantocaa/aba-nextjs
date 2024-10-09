import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Sector() {
  const t = useTranslations("Sector-Home");
  const sectorgoods = [
    {
      id: 1,
      name: t("sector-value-1"),
      path: "/images/Layer_goods_1.svg",
    },
    {
      id: 2,
      name: t("sector-value-2"),
      path: "/images/Layer_goods_2.svg",
    },
    {
      id: 3,
      name: t("sector-value-3"),
      path: "/images/Layer_goods_3.svg",
    },
    {
      id: 4,
      name: t("sector-value-4"),
      path: "/images/Layer_goods_4.svg",
    },
    {
      id: 5,
      name: t("sector-value-5"),
      path: "/images/Layer_goods_5.svg",
    },
  ];
  return (
    <>
      <section className="py-16">
        <div className="bg-blueaba-500 relative">
          <div className="md:grid grid-cols-2 w-full container">
            <div className="text-white py-16 max-w-xl">
              <h1 className="text-5xl font-syne font-semibold">
                Industry <span className="text-yellowaba-500">Sectors</span>{" "}
                Coverage
              </h1>
              <p className="py-4 text-xl mb-6 md:mb-0">{t("subline")}</p>

              {sectorgoods.map((slide, index) => (
                <div key={slide.id} className="flex gap-4 ">
                  <Image
                    src={slide.path}
                    alt={`Image ${index + 1}`}
                    width={96}
                    height={96}
                    className=""
                  />
                  <div className="flex items-center">
                    <div className="max-w-md">
                      <h1 className="text-2xl text-darkaba">{slide.name}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src="/images/DSC07966.JPG"
              alt="imgtruck"
              width={1440}
              height={2560}
              className="h-full object-cover w-1/2 right-0 hidden md:block md:absolute"
            />
          </div>
        </div>
      </section>
    </>
  );
}
