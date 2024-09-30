import Image from "next/image";
import React, { forwardRef } from "react";

import { Link } from "@/i18n/routing";
import Progres from "./aboutshort/progress";

// eslint-disable-next-line react/display-name
const AboutShort = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref}>
      <div className="pt-32 pb-16 relative">
        <div className="container w-full">
          <div className="grid grid-cols-2 items-center gap-8">
            <Image
              src="/images/image 8.png"
              alt="img"
              width={1280}
              height={1280}
              className="hidden md:block shadow-2xl"
            />
            <div className="w-full">
              <h1 className="text-6xl font-semibold font-syne">
                Global <span className="text-yellowaba-500">Shipping</span>{" "}
                Solution Since 2014
              </h1>
              <p className="pt-4 leading-relaxed">
                <span className="font-semibold">
                  PT. ARMADA BERKAT ANUGERAH
                </span>{" "}
                adalah perusahaan distribusi terkemuka yang berkomitmen untuk
                memberikan pelayanan terbaik dan solusi distribusi yang
                inovatif. Dengan jaringan luas di seluruh Bali dan didukung oleh
                teknologi mutakhir, kami memastikan setiap produk tiba dengan
                aman dan tepat waktu.
              </p>
              <div className="mt-4 mb-8">
                <Progres />
              </div>
              <Link href="/about" className="w-fit">
                <button className="font-semibold block rounded-full bg-yellowaba-500 px-8 py-3 text-darkaba shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500 sm:w-auto">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutShort;
