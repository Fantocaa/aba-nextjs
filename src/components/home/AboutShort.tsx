import Image from "next/image";
import React, { forwardRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";

// eslint-disable-next-line react/display-name
const AboutShort = forwardRef<HTMLDivElement>((props, ref) => {
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
    <section ref={ref}>
      <div className="py-16 relative">
        <div className="container w-full">
          <div className="grid grid-cols-2 items-center gap-4">
            <Image
              src="/images/image 8.png"
              alt="img"
              width={1280}
              height={1280}
              className="hidden md:block"
            />
            <div className="w-full">
              <h1 className="text-6xl font-semibold font-syne">
                Global <span className="text-yellowaba-500">Shipping</span>{" "}
                Solution Since 2014
              </h1>
              <p className="pt-4 leading-loose">
                <span className="font-semibold">
                  PT. ARMADA BERKAT ANUGERAH
                </span>{" "}
                adalah perusahaan distribusi terkemuka yang berkomitmen untuk
                memberikan pelayanan terbaik dan solusi distribusi yang
                inovatif. Dengan jaringan luas di seluruh Bali dan didukung oleh
                teknologi mutakhir, kami memastikan setiap produk tiba dengan
                aman dan tepat waktu.
              </p>
              <div className="mt-8 mb-12">
                {progress.map((value) => (
                  <div key={value.id}>
                    <div className="flex justify-between my-2">
                      <h1>{value.title}</h1>
                      <h1>{value.progress}%</h1>
                    </div>
                    <Progress value={value.progress} />
                  </div>
                ))}
              </div>
              <Link href="/about" className="w-fit">
                <button className="font-semibold block rounded-full bg-yellowaba-500 px-8 py-3 text-darkaba shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500 sm:w-auto">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutShort;
