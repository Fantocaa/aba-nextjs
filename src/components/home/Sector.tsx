import Image from "next/image";
import React from "react";

export default function Sector() {
  const sectorgoods = [
    {
      id: 1,
      name: "Consumer Packaged Goods",
      path: "/images/Layer_goods_1.svg",
    },
    {
      id: 2,
      name: "Chemical Goods",
      path: "/images/Layer_goods_2.svg",
    },
    {
      id: 3,
      name: "Food and Beverage",
      path: "/images/Layer_goods_3.svg",
    },
    {
      id: 4,
      name: "Retail Goods",
      path: "/images/Layer_goods_4.svg",
    },
    {
      id: 5,
      name: "Energy, Oil and Gas",
      path: "/images/Layer_goods_5.svg",
    },
  ];
  return (
    <>
      <section className="py-16">
        <div className="bg-blueaba-500 relative">
          <div className="grid grid-cols-2 w-full container ">
            <div className="text-white py-16">
              <h1 className="text-6xl font-syne font-semibold">
                Industry <span className="text-yellowaba-500">Sectors</span>{" "}
                Coverage
              </h1>
              <p className="py-4 text-xl max-w-xl">
                We cover different industry sectors, from food and beverage,
                chemical, retail, durable goods and more. Check the full list.
              </p>

              {sectorgoods.map((slide, index) => (
                <div key={slide.id} className="flex gap-4">
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
              src="/images/bernd-dittrich-vQijG3uuaNw-unsplash 1.png"
              alt="imgtruck"
              width={1440}
              height={2560}
              className="h-full object-cover absolute w-1/2 right-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
