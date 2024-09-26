import Image from "next/image";
import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const AboutShort = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref}>
      <div className="py-16 relative">
        <div className="container w-full">
          <div className="flex items-center gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-semibold">Who We Are?</h1>
              <p className="pt-4 leading-loose">
                <span className="font-semibold">
                  PT. BERLIMPAH ANUGERAH SEJATI
                </span>{" "}
                adalah perusahaan distribusi terkemuka yang berkomitmen untuk
                memberikan pelayanan terbaik dan solusi distribusi yang
                inovatif. Dengan jaringan luas di seluruh Bali dan didukung oleh
                teknologi mutakhir, kami memastikan setiap produk tiba dengan
                aman dan tepat waktu.
              </p>
            </div>
            <Image
              src="/images/pngegg (5) 1.png"
              alt="img"
              width={800}
              height={800}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutShort;
