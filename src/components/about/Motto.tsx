import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Motto() {
  return (
    <>
      <section
        className="relative"
        // style={{
        //   backgroundImage: "url('/images/people-safety-equipment-work.webp')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="absolute inset-0 z-0 bg-white opacity-10">
          <Image
            src="/images/people-safety-equipment-work.webp"
            alt="Background Image"
            // width={1080}
            // height={1080}
            layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            // quality={100}
            // priority
            className="object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 bg-white opacity-90"></div> */}
        <div className="py-24 container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-8xl font-semibold">
                <span className="text-redbas-500">B</span>
                <span className="text-bluebas-500">I</span>
                <span className="text-redbas-500">S</span>
                <span className="text-bluebas-500">A</span>
              </h1>
              <p className="leading-loose text-xl py-8">
                Motto kami,{" "}
                <span className="font-semibold">
                  &quot;BISA&quot; (Berani, Inovatif, Semangat, Akuntabilitas)
                </span>{" "}
                , mencerminkan nilai-nilai inti kami dalam beroperasi. Kami
                berani mengambil langkah inovatif, selalu mencari cara baru
                untuk meningkatkan layanan, bekerja dengan penuh semangat, dan
                bertanggung jawab atas setiap langkah yang kami ambil untuk
                memberikan hasil terbaik.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Badge
                  variant="default"
                  className="py-3 px-12 rounded-full font-medium text-lg bg-redbas-500"
                >
                  Berani
                </Badge>
                <Badge
                  variant="default"
                  className="py-3 px-12 rounded-full font-medium text-lg bg-bluebas-500"
                >
                  Inovatif
                </Badge>
                <Badge
                  variant="default"
                  className="py-3 px-12 rounded-full font-medium text-lg bg-redbas-500"
                >
                  Semangat
                </Badge>
                <Badge
                  variant="default"
                  className="py-3 px-12 rounded-full font-medium text-lg bg-bluebas-500"
                >
                  Akuntabilitas
                </Badge>
              </div>
            </div>
            <div>
              <div className="p-8 bg-redbas-500 rounded-2xl text-white mb-6">
                <h1 className="text-4xl font-semibold pb-4">Vision</h1>
                <p className="text-lg leading-loose">
                  Menjadi Perusahaan distribusi yang membawa setiap partner yang
                  bekerja sama untuk menjadi market leader di bidangnya
                </p>
              </div>
              <div className="p-8 bg-bluebas-500 rounded-2xl text-white">
                <p className="text-4xl font-semibold pb-4">Mision</p>
                <ul className="list-disc pl-5 text-lg leading-loose">
                  <li>
                    Memberikan pelayanan terbaik dalam pendistribusian product
                  </li>
                  <li>
                    Mengutamakan mutudan pelayanan untuk kepuasan pelanggan
                    Mampu
                  </li>
                  <li>Memberikan kontribusi untuk pertumbuhan produk</li>
                  <li>Menjadi distributor yang terbaik dan terpercaya</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
