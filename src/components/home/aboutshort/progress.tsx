import React from "react";
import { Progress } from "@/components/ui/progress";

export default function Progres() {
  const progress = [
    {
      id: 1,
      title: "Successful Shipment",
      progress: 88,
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      progress: 84,
    },
    {
      id: 3,
      title: "Products Delivery",
      progress: 94,
    },
  ];
  return (
    <>
      {progress.map((value) => (
        <div key={value.id} className="my-4">
          <div className="flex justify-between">
            <h1 className="text-xl mb-2">{value.title}</h1>
            <h1>{value.progress}%</h1>
          </div>
          <Progress value={value.progress} />
        </div>
      ))}
    </>
  );
}
