import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DataProps {
  id: number;
  title: string;
  onClick: () => void;
  isSelected: boolean; // Add this prop to indicate if the item is selected
}

const Data: React.FC<DataProps> = ({ id, title, onClick, isSelected }) => {
  return (
    <div key={id}>
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <Button
          onClick={onClick}
          className={`rounded-full py-6 ${
            isSelected
              ? "bg-redbas-500 hover:bg-red-700"
              : "hover:bg-redbas-500"
          }`}
        >
          <ArrowRight />
        </Button>
      </div>
      <Separator />
    </div>
  );
};

export default Data;
