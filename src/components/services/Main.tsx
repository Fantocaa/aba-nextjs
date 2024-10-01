import Image from "next/image";
import React from "react";

export default function Main() {
  const WhyChooseUs = [
    {
      id: 1,
      title: "Pengiriman Jarak Jauh",
      subline:
        "Kami menyediakan layanan pengiriman ke seluruh Indonesia dengan cepat dan aman.",
      path: "/images/bernd-dittrich-Xk1IfNnEhRA-unsplash.jpg",
    },
    {
      id: 2,
      title: "Pengiriman Jarak Dekat",
      subline:
        "Layanan cepat untuk pengiriman dalam kota atau antar kota terdekat.",
      path: "/images/colleagues-safety-equipment-work.jpg",
    },
    {
      id: 3,
      title: "Pengiriman Dalam Jumlah Besar",
      subline:
        "Kami menangani pengiriman barang dalam jumlah besar dengan armada yang siap.",
      path: "/images/woman-wearing-safety-cap-work.jpg",
    },
    {
      id: 4,
      title: "Pengiriman Dalam Jumlah Kecil",
      subline:
        "Pengiriman barang kecil dengan layanan yang efisien dan terjangkau.",
      path: "/images/woman-safety-equipment-work.jpg",
    },
    {
      id: 5,
      title: "Pengiriman Segala Jenis Barang",
      subline:
        "Kami melayani pengiriman berbagai jenis barang dengan aman dan tepat waktu.",
      path: "/images/woman-safety-equipment-work.jpg",
    },
  ];

  return (
    <>
      <section className="container">
        <div className="mt-16">
          {/* <div>
              <div className="p-6 bg-yellowaba-500 max-w-md rounded-2xl mb-4">
                <h1 className="text-xl font-semibold">Pengiriman jarak jauh</h1>
                <p>
                  Kami menyediakan layanan pengiriman ke seluruh Indonesia
                  dengan cepat dan aman.
                </p>
              </div>
              <div className="p-6 bg-yellowaba-500 max-w-md rounded-2xl mb-4">
                <h1 className="text-xl font-semibold">
                  Pengiriman jarak dekat
                </h1>
                <p>
                  Layanan cepat untuk pengiriman dalam kota atau antar kota
                  terdekat.
                </p>
              </div>
              <div className="p-6 bg-yellowaba-500 max-w-md rounded-2xl mb-4">
                <h1 className="text-xl font-semibold">
                  Melayani pengiriman dalam jumlah besar
                </h1>
                <p>
                  Kami menangani pengiriman barang dalam jumlah besar dengan
                  armada yang siap.
                </p>
              </div>
              <div className="p-6 bg-yellowaba-500 max-w-md rounded-2xl mb-4">
                <h1 className="text-xl font-semibold">
                  Melayani pengiriman dalam jumlah kecil
                </h1>
                <p>
                  Pengiriman barang kecil dengan layanan yang efisien dan
                  terjangkau.
                </p>
              </div>
              <div className="p-6 bg-yellowaba-500 max-w-md rounded-2xl">
                <h1 className="text-xl font-semibold">
                  Melayani pengiriman segala jenis barang
                </h1>
                <p>
                  Kami melayani pengiriman berbagai jenis barang dengan aman dan
                  tepat waktu.
                </p>
              </div>
            </div> */}
          {/* <Image
              src="/images/truck.png"
              alt="truck"
              width={2560}
              height={2560}
              className=""
            /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            {WhyChooseUs.slice(0, 2).map((slide, index) => (
              <div key={slide.id}>
                <div className="group relative block overflow-hidden rounded-xl bg-blueaba-500 hover:bg-yellowaba-500 transition-all duration-500">
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
                        <h1 className="text-3xl text-white font-semibold group-hover:text-gray-900 transition-all duration-500">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-white max-w-md py-4 group-hover:text-gray-900 transition-all duration-500">
                          {slide.subline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center pt-4 w-full">
            {WhyChooseUs.slice(2).map((slide, index) => (
              <div key={slide.id}>
                <div className="group relative block overflow-hidden rounded-xl bg-blueaba-500 hover:bg-yellowaba-500 transition-all duration-500 ">
                  <div className="relative h-64">
                    <Image
                      src={slide.path}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 opacity-30"
                    />
                    <div className="absolute inset-y-0 left-8 flex items-center justify-center max-w-xs w-full">
                      <div>
                        <h1 className="text-3xl text-white font-semibold group-hover:text-gray-900 transition-all duration-500">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-white max-w-md py-4 group-hover:text-gray-900 transition-all duration-500">
                          {slide.subline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
