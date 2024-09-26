"use client";

import React, { useState } from "react";
import Data from "./tab/Data";
import DataItem1 from "./tab/DataItem1";
import DataItem2 from "./tab/DataItem2";
import DataItem3 from "./tab/DataItem3";
import DataItem4 from "./tab/DataItem4";

export default function WhyChooseUs() {
  const data = [
    {
      id: 1,
      title: "Jaringan Distributor",
      content: <DataItem1 />,
    },
    {
      id: 2,
      title: "Teknologi Terdepan",
      content: <DataItem2 />,
    },
    {
      id: 3,
      title: "Tim Profesional",
      content: <DataItem3 />,
    },
    {
      id: 4,
      title: "Komitment Penuh",
      content: <DataItem4 />,
    },
  ];

  const [selectedId, setSelectedId] = useState(data[0].id);

  const handleClick = (id: number, content: React.ReactNode) => {
    setSelectedId(id);
    setSelectedContent(content);
  };

  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
    data[0].content
  );

  return (
    <section className="py-16 container pt-32">
      <div className="text-center max-w-screen-md mx-auto">
        <h1 className="font-semibold text-4xl pb-4">Why Choose Us?</h1>
        <p className="leading-loose text-lg">
          Kami berkomitmen untuk memberikan layanan distribusi terbaik yang
          didukung oleh jaringan luas, teknologi canggih, tim profesional, dan
          komitmen penuh. Temukan apa yang membuat kami berbeda.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-16 gap-16 items-center">
        <div className="py-8">
          {data.map((item) => (
            <Data
              key={item.id}
              id={item.id}
              title={item.title}
              onClick={() => handleClick(item.id, item.content)}
              isSelected={item.id === selectedId}
            />
          ))}
        </div>
        {selectedContent}
      </div>
    </section>
  );
}
