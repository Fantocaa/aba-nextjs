import Image from "next/image";
import React, { forwardRef } from "react";
import Progres from "../home/aboutshort/progress";
import { Plus } from "lucide-react";

// eslint-disable-next-line react/display-name
const AboutFull = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <section
        className="container py-16 mt-16"
        // ref={ref}
      >
        <div className="grid md:grid-cols-2 gap-4 ">
          <>
            <div>
              <h1 className="font-semibold text-6xl pb-4 font-syne leading-tight">
                Global Shipping Solution Since 2014
              </h1>
              <p className="leading-relaxed">
                PT. ARMADA BERKAT ANUGERAH merupakan perusahaan distribusi yang
                saat ini berdomisili di Pulau Bali. Dibangun pada masa pandemic
                yaitu Januari 2021 dimana principal pabrik berusaha untuk
                menekan biaya distribusi guna menyelamatkan organisasi secara
                keseluruhan. Jalur distribusi di Pulau Bali secara global
                berdampak besar sekitar 90% usaha harus terhenti akibat
                pandemic.
              </p>
              <div className="mt-4 relative">
                <Image
                  src="/images/woman-safety-equipment-work.jpg"
                  alt="img"
                  width={1080}
                  height={1080}
                  className="h-[35.5rem] 2xl:h-[30.3rem] object-cover rounded-2xl"
                />
                <div className="absolute bg-yellowaba-500 rounded-full p-4 bottom-20 left-20 z-10">
                  <Plus size={48} />
                </div>
                <div className="bg-white absolute left-1/2 bottom-8 transform -translate-x-1/2 p-6 rounded-2xl w-full max-w-md text-center">
                  <h1 className="text-2xl font-semibold">
                    Ari Mulyana Pratama
                  </h1>
                  <h2>Manager of PT. ARMADA BERKAT ANUGERAH</h2>
                </div>
              </div>
            </div>
          </>
          <>
            <div>
              <div className="bg-blueaba-500 p-6 text-white h-fit rounded-2xl">
                <Progres />
              </div>
              <>
                <div className="bg-yellowaba-500 p-6 py-8 text-black h-fit mt-4 rounded-2xl">
                  <h1 className="text-4xl font-bold font-syne">Vision</h1>
                  <p className="text-xl mt-4 font-light">
                    Menjadi perusahaan logistic terbaik yang terkemuka,
                    terpercaya dan handal dengan mengutamakan kepercayaan dan
                    kepuasan pelanggan
                  </p>
                </div>

                <div className="bg-bluelightaba-500 p-6 py-8 text-white h-fit mt-4 rounded-2xl">
                  <h1 className="text-4xl font-bold font-syne">Mission</h1>
                  <ul className="list-disc pl-4 text-xl mt-4 font-light">
                    <li>
                      Memberikan pelayanan yang kompetitif, berkualitas, dan
                      aman.
                    </li>
                    <li className="pt-4">
                      Menjadi solusi pelanggan dalam keperluan pengiriman
                      barang.
                    </li>
                    <li className="py-4">
                      Melakukan perkembangan manajemen dan teknologi sehingga
                      mampu memberikan kepuasan dan kepercayaan pelanggan.
                    </li>
                  </ul>
                </div>
              </>
            </div>
          </>
        </div>
      </section>
    </>
  );
});

export default AboutFull;
