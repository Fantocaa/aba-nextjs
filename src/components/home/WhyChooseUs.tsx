import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const WhyChooseUs = [
    {
      id: 1,
      title: "Contract Logistics",
      subline:
        "Need custom logistic service? We got it covered. From overland, air, rail and sea transportation. Fast, safe and accurate shipment provided all over the globe.",
      path: "/images/Layer_1.svg",
      link: "/about",
    },
    {
      id: 2,
      title: "Overland, Ocean and Air Freight",
      subline:
        "Trucking company offers the best logistics services using all mens of supply chain. Use our overland, ocean and air freight solutions for shipment of your goods.",
      path: "/images/Layer_2.svg",
      link: "/about",
    },
    {
      id: 3,
      title: "Warehousing and Storage",
      subline:
        "Trucking offers intelligent warehouse solution. Lower your storage and good maintenance by using our modern and intelligent warehouses. You can see all locations on location page.",
      path: "/images/Layer_3.svg",
      link: "/about",
    },
    {
      id: 4,
      title: "Consulting Services",
      subline:
        "Don't know what mean of transportation would be right for you, or you need someone for full supply chain management? Please contact us. Our team of professionals will be happy to help.",
      path: "/images/Layer_4.svg",
      link: "/about",
    },
  ];

  return (
    <>
      <div className="container py-16">
        <div className="md:text-center flex flex-col items-center">
          <h1 className="font-semibold text-4xl font-syne">
            Apa yang bisa kami tawarkan?
          </h1>
          <p className="max-w-2xl pt-4">
            Kami berkomitmen untuk memberikan layanan distribusi terbaik yang
            didukung oleh jaringan luas, teknologi canggih, tim profesional, dan
            komitmen penuh. Temukan apa yang membuat kami berbeda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8 w-full">
          {WhyChooseUs.map((slide, index) => (
            <div key={slide.id}>
              <div className="">
                <div className="grid grid-cols-8 h-64 bg-white rounded-2xl mx-auto">
                  <Image
                    src={slide.path}
                    alt={`Image ${index + 1}`}
                    width={96}
                    height={96}
                    className="mx-auto my-auto col-span-2"
                  />
                  <div className="flex items-center col-span-6">
                    <div className="max-w-md">
                      <h1 className="text-3xl text-darkaba font-semibold">
                        {slide.title}
                      </h1>
                      <p className="text-base text-darkaba max-w-xl py-2">
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
    </>
  );
}
