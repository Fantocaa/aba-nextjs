import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

export default function CallToAction() {
  return (
    <>
      <section className="container py-16">
        <div className="bg-blueaba-500 items-center rounded-2xl relative overflow-hidden">
          {/* Background image with opacity */}
          <Image
            src="/images/image 7.png"
            alt="img"
            width={1280}
            height={1280}
            className="w-full h-40 object-cover opacity-10"
          />

          {/* Content on top of the background */}
          <div className="absolute inset-0 flex justify-between items-center px-32 py-6">
            {/* Left side: Icon and text */}
            <div className="flex gap-8 items-center max-w-xl">
              <Image
                src="/images/image 5.svg"
                alt="shield"
                width={1280}
                height={500}
                className="w-16"
              />
              <h1 className="text-white text-4xl font-syne">
                Delivering Through Best{" "}
                <span className="text-yellowaba-500">
                  Secure Logistics Solutions
                </span>
              </h1>
            </div>

            {/* Right side: Button */}
            <Link href="/contact" className="w-auto">
              <button className="font-semibold rounded-full bg-yellowaba-500 px-8 py-3 text-darkaba shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
