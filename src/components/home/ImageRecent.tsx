"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface HeaderProps {
  subtitle: string;
}

export default function ImageRecent({ subtitle }: HeaderProps) {
  // State untuk mengelola lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Daftar gambar yang digunakan dalam lightbox
  const slides = [
    { src: "/images/DSC07974.JPG" },
    { src: "/images/DSC07956.JPG" },
    { src: "/images/DSC07970.JPG" },
    { src: "/images/DSC07966.JPG" },
    { src: "/images/DSC07977.JPG" },
  ];

  return (
    <>
      <section className="container py-16">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-semibold">
            Recent Activity Delivery
          </h1>
          <p className="max-w-3xl text-center mx-auto mt-2 text-lg">
            {subtitle}
          </p>
        </div>

        {/* Gambar 2 kolom */}
        <div className="grid grid-cols-2 mt-8 gap-4">
          {slides.slice(0, 2).map((slide, i) => (
            <Image
              key={i}
              className="rounded-2xl cursor-pointer h-full object-cover"
              src={slide.src}
              alt={`Image ${i + 1}`}
              width={1080}
              height={1080}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </div>

        {/* Gambar 3 kolom */}
        <div className="grid grid-cols-3 mt-4 gap-4">
          {slides.slice(2).map((slide, i) => (
            <Image
              key={i + 2}
              className="rounded-2xl cursor-pointer h-full object-cover"
              src={slide.src}
              alt={`Image ${i + 3}`}
              width={1080}
              height={1080}
              onClick={() => {
                setIndex(i + 2);
                setOpen(true);
              }}
            />
          ))}
        </div>

        {/* Komponen Lightbox */}
        {open && (
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
          />
        )}
      </section>
    </>
  );
}
