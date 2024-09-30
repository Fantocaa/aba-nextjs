"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import gaya Lightbox

export default function ImageRecent() {
  // State untuk mengelola lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Daftar gambar yang digunakan dalam lightbox
  const slides = [
    { src: "/images/img_017.jpg" },
    { src: "/images/img_013.jpg" },
    { src: "/images/img_018.jpg" },
    { src: "/images/img_016.jpg" },
    { src: "/images/img_014.jpg" },
  ];

  return (
    <>
      <section className="container py-16">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-semibold">
            Recent <span>Successful</span> Delivery
          </h1>
          <p className="max-w-2xl text-center mx-auto mt-2">
            Aliquid irure perspiciatis dignissim, ipsum minima, sint, incididunt
            nobis eum architecto! Dicta suspendisse duis dicta.
          </p>
        </div>

        {/* Gambar 2 kolom */}
        <div className="grid grid-cols-2 mt-8 gap-4">
          {slides.slice(0, 2).map((slide, i) => (
            <Image
              key={i}
              className="rounded-2xl cursor-pointer "
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
              className="rounded-2xl cursor-pointer "
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
