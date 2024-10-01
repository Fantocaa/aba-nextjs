// "use client";

import React, { useState } from "react";
// import Data from "./tab/Data";
// import DataItem1 from "./tab/DataItem1";
// import DataItem2 from "./tab/DataItem2";
// import DataItem3 from "./tab/DataItem3";
// import DataItem4 from "./tab/DataItem4";
import Image from "next/image";

export default function WhyChooseUs() {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Jaringan Distributor",
  //     content: <DataItem1 />,
  //   },
  //   {
  //     id: 2,
  //     title: "Teknologi Terdepan",
  //     content: <DataItem2 />,
  //   },
  //   {
  //     id: 3,
  //     title: "Tim Profesional",
  //     content: <DataItem3 />,
  //   },
  //   {
  //     id: 4,
  //     title: "Komitment Penuh",
  //     content: <DataItem4 />,
  //   },
  // ];

  // const [selectedId, setSelectedId] = useState(data[0].id);

  // const handleClick = (id: number, content: React.ReactNode) => {
  //   setSelectedId(id);
  //   setSelectedContent(content);
  // };

  // const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
  //   data[0].content
  // );

  return (
    <section className="py-16">
      <div className="bg-blueaba-500 relative text-white overflow-hidden">
        <div className="container relative z-10 py-16">
          <h1 className="font-semibold text-5xl pb-4 text-center font-syne">
            Why Make Us <span className="text-yellowaba-500">Difference</span>?
          </h1>
          <div className="grid grid-cols-2 mt-16 items-center">
            <div className="max-w-xl">
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2">Commitment</h1>
                <p className="text-xl">
                  Memiliki komitmen untuk memberikan pelayanan terbaik dan loyal
                  terhadap setiap pelanggan Kami
                </p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Ontime
                </h1>
                <p className="text-xl">
                  Dalam memberikan layanan yang berkualitas, Kami selalu
                  memastikan ketepatan dalam estimasi waktu yang Kami janjikan
                </p>
              </div>
            </div>
            <Image
              src="/images/commit.svg"
              alt="commit"
              width={1080}
              height={1080}
            />
          </div>
          <div className="grid grid-cols-2 mt-8 items-center">
            <div className="order-last">
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2">
                  Reliability
                </h1>
                <p className="text-xl">
                  Memberikan pelatihan terhadap SDM untuk meningkatkan kualitas
                  pelayanan dan kehandalan dalam melakukan tanggung jawab
                  pekerjaan yang sudah dipercayakan oleh pelanggan
                </p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Nicely
                </h1>
                <p className="text-xl">
                  Memastikan setiap pelanggan mendapatkan informasi yang
                  komunikatif dengan layanan yang ramah, sehingga menciptakan
                  hubungan yang baik dengan semua pihak
                </p>
              </div>
            </div>
            <Image
              src="/images/reliability.svg"
              alt="reliability"
              width={1080}
              height={1080}
            />
          </div>
        </div>
        {/* Background image with opacity */}
        <Image
          src="/images/image 7.png"
          alt="img"
          width={1280}
          height={1280}
          className="w-full h-full object-cover opacity-10 absolute top-0 left-0 z-0"
        />
      </div>
    </section>
  );
}
