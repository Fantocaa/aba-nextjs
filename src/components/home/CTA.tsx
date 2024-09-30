"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CTA() {
  const imageSlides = [
    { id: 1, path: "/images/young-man-working-warehouse-with-boxess.jpg" },
    { id: 2, path: "/images/young-man-working-warehouse-with-boxes-_1_.webp" },
    { id: 3, path: "/images/people-safety-equipment-work.webp" },
    { id: 4, path: "/images/woman-wearing-safety-cap-work.jpg" },
    { id: 5, path: "/images/man-safety-equipment-working.jpg" },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className="bg-whitebas py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center">
            <h1 className="text-4xl md:text-6xl font-semibold pb-4">
              Let’s Grow Your Business Now!
            </h1>
            <div className="md:pl-32">
              <h1 className="pb-4">
                Hubungi kami untuk mengetahui lebih lanjut tentang layanan
                distribusi kami.
              </h1>
              <Link href="/contact">
                <Button className="rounded-full bg-redbas-500">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="h-full w-full mt-20"
          >
            <CarouselContent className="h-full">
              {imageSlides.map((slide, index) => (
                <CarouselItem
                  key={slide.id}
                  className="h-full md:basis-1/3"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative h-full cursor-pointer">
                    <Image
                      alt="hero"
                      src={slide.path}
                      className="h-80 w-full object-cover rounded-xl"
                      width={2560}
                      height={2560}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={imageSlides.map((slide) => ({ src: slide.path }))}
        index={currentIndex}
      />
    </>
  );
}
