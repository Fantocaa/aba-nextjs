// "use client";

import React, { useState } from "react";
// import Data from "./tab/Data";
// import DataItem1 from "./tab/DataItem1";
// import DataItem2 from "./tab/DataItem2";
// import DataItem3 from "./tab/DataItem3";
// import DataItem4 from "./tab/DataItem4";
import Image from "next/image";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("WhychooseUs");

  return (
    <section className="py-16">
      <div className="bg-blueaba-500 relative text-white overflow-hidden">
        <div className="container relative z-10 py-16">
          <h1 className="font-semibold text-5xl pb-4 text-center font-syne">
            {t("title")}{" "}
            <span className="text-yellowaba-500">{t("title-1")}</span>?
          </h1>
          <div className="grid grid-cols-2 mt-16 items-center">
            <div className="max-w-xl">
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2">Commitment</h1>
                <p className="text-xl">{t("1")}</p>
              </div>
              <div className="my-8">
                <h1 className="text-4xl text-yellowaba-500 mb-2 ">Ontime</h1>
                <p className="text-xl">{t("2")}</p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2">
                  Reliability
                </h1>
                <p className="text-xl">{t("3")}</p>
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
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Nicely
                </h1>
                <p className="text-xl">{t("4")}</p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Eficienly
                </h1>
                <p className="text-xl">{t("5")}</p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Relation
                </h1>
                <p className="text-xl">{t("6")}</p>
              </div>
              <div>
                <h1 className="text-4xl text-yellowaba-500 mb-2 mt-8">
                  Safety
                </h1>
                <p className="text-xl">{t("7")}</p>
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
