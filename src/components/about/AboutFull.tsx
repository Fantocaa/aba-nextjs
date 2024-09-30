import Image from "next/image";
import React, { forwardRef } from "react";
import Progres from "../home/aboutshort/progress";

// eslint-disable-next-line react/display-name
const AboutFull = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <section className="container py-16" ref={ref}>
        <div className="grid md:grid-cols-2 gap-4 ">
          <>
            <div>
              <h1 className="font-semibold text-6xl pb-4 font-syne leading-tight">
                Global Shipping  Solution Since 2014
              </h1>
              <p className="leading-relaxed">
                PT. BERLIMPAH ANUGERAH SEJATI merupakan perusahaan distribusi
                yang saat ini berdomisili di Pulau Bali. Dibangun pada masa
                pandemic yaitu Januari 2021 dimana principal pabrik berusaha
                untuk menekan biaya distribusi guna menyelamatkan organisasi
                secara keseluruhan. Jalur distribusi di Pulau Bali secara global
                berdampak besar sekitar 90% usaha harus terhenti akibat
                pandemic.
              </p>
            </div>
          </>
          <>
            <div className="bg-blueaba-500 p-4 text-white h-fit gridend">
              <Progres />
            </div>
          </>
          <>
            <Image
              src="/images/woman-safety-equipment-work.jpg"
              alt="img"
              width={1080}
              height={1080}
              className="h-1/2 object-cover"
            />
          </>
          <>
            <div className="flex flex-col gap-4">
              <div className="bg-yellowaba-500 p-4 py-8 text-black h-fit">
                <h1 className="text-4xl font-bold font-syne">Vision</h1>
                <p className="text-xl mt-4 font-light">
                  Menjadi perusahaan logistic terbaik yang terkemuka, terpercaya
                  dan handal dengan mengutamakan kepercayaan dan kepuasan
                  pelanggan
                </p>
              </div>

              <div className="bg-bluelightaba-500 p-4 py-8 text-white h-fit">
                <h1 className="text-4xl font-bold font-syne">Mission</h1>
                <ul className="list-disc pl-4 text-xl mt-4">
                  <li>
                    Memberikan pelayanan yang kompetitif, berkualitas, dan aman.
                  </li>
                  <li className="pt-4">
                    Menjadi solusi pelanggan dalam keperluan pengiriman barang.
                  </li>
                  <li className="py-4">
                    Melakukan perkembangan manajemen dan teknologi sehingga
                    mampu memberikan kepuasan dan kepercayaan pelanggan.
                  </li>
                </ul>
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
});

export default AboutFull;
