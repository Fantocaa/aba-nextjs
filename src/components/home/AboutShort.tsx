import Image from "next/image";
import React, { forwardRef } from "react";

import { Link } from "@/i18n/routing";
import Progres from "./aboutshort/progress";
import { useTranslations } from "next-intl";

// eslint-disable-next-line react/display-name
const AboutShort = forwardRef<HTMLDivElement>((props, ref) => {
  const t = useTranslations("About-Short");
  return (
    <section ref={ref}>
      <div className="pt-32 pb-16 relative">
        <div className="container w-full">
          <div className="grid grid-cols-2 items-center gap-8">
            <Image
              src="/images/DSC07966.JPG"
              alt="img"
              width={1280}
              height={1280}
              className="hidden md:block shadow-2xl object-cover w-full h-full rounded-2xl"
            />
            <div className="w-full">
              <h1 className="text-6xl font-semibold font-syne">
                Trucking <span className="text-yellowaba-500">Shipment</span>{" "}
                Solution Since 2014
              </h1>
              <p className="pt-4 leading-relaxed">
                <span className="font-semibold">
                  PT. ARMADA BERKAT ANUGERAH
                </span>
                {t("desc")}
              </p>
              <div className="mt-4 mb-8">
                <Progres />
              </div>
              <div className="flex mt-4">
                <Link href="/about">
                  <button className="font-semibold rounded-full bg-yellowaba-500 px-8 py-3 text-darkaba shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500 sm:w-auto">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutShort;
