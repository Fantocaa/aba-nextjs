import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const WhyChooseUs = [
    {
      id: 1,
      title: "Jaringan Luas",
      subline:
        "Kami memiliki jaringan distribusi yang luas di Bali, menjangkau berbagai segmen pasar modern dan tradisional.",
      path: "/images/bernd-dittrich-Xk1IfNnEhRA-unsplash.jpg",
      link: "/about",
    },
    {
      id: 2,
      title: "Teknologi Terdepan",
      subline:
        "Kami menggunakan sistem teknologi canggih untuk pemantauan stok real-time dan transaksi efisien di lapangan.",
      path: "/images/colleagues-safety-equipment-work.jpg",
      link: "/about",
    },
    {
      id: 3,
      title: "Tim Profesional",
      subline:
        "Tim kami terdiri dari tenaga ahli berpengalaman yang dilengkapi dengan pelatihan menyeluruh untuk memastikan kualitas layanan terbaik.",
      path: "/images/woman-wearing-safety-cap-work.jpg",
      link: "/about",
    },
    {
      id: 4,
      title: "Komitmen Penuh",
      subline:
        "Kami bertanggung jawab penuh atas distribusi produk Anda, dengan fasilitas gudang strategis yang siap melayani kebutuhan distribusi Anda di seluruh Bali.",
      path: "/images/woman-safety-equipment-work.jpg",
      link: "/about",
    },
  ];

  return (
    <>
      <div className="container py-16">
        <div className="md:text-center flex flex-col items-center">
          <h1 className="font-semibold text-4xl">What Make Us Different?</h1>
          <p className="max-w-2xl pt-4">
            Kami berkomitmen untuk memberikan layanan distribusi terbaik yang
            didukung oleh jaringan luas, teknologi canggih, tim profesional, dan
            komitmen penuh. Temukan apa yang membuat kami berbeda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-8 w-full">
          {WhyChooseUs.map((slide, index) => (
            <Link href="/about" key={slide.id}>
              <div className="group relative block overflow-hidden rounded-xl bg-black">
                <div className="relative h-64">
                  <Image
                    src={slide.path}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 opacity-30"
                  />
                  <div className="absolute inset-y-0 left-8 flex items-center justify-center">
                    <div>
                      <h1 className="text-3xl text-white font-semibold">
                        {slide.title}
                      </h1>
                      <p className="text-sm text-white max-w-md py-4">
                        {slide.subline}
                      </p>
                      <Button className="rounded-full bg-redbas-500 flex gap-1 hover:bg-red-50 hover:text-redbas-500">
                        Detail
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
