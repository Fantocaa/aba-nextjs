import Image from "next/image";
import React, { forwardRef } from "react";
import Progres from "../home/aboutshort/progress";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

// eslint-disable-next-line react/display-name
const AboutFull = forwardRef<HTMLDivElement>((props, ref) => {
  const t = useTranslations("About-Short");
  return (
    <>
      <section
        className="container py-16 mt-16"
        // ref={ref}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
          <>
            <div>
              <h1 className="text-5xl 2xl:text-6xl font-semibold font-syne pb-8 md:pb-4 max-w-xl">
                Solution for your Trucking{" "}
                <span className="text-yellowaba-500">Shipment</span>{" "}
              </h1>
              <p className="leading-relaxed text-lg">
                <span className="font-semibold">
                  PT. ARMADA BERKAT ANUGERAH
                </span>{" "}
                {t("desc")}
                <br />
                <br />
                {t("desc-1")}
              </p>
            </div>
          </>
          <>
            <div>
              <div className="bg-blueaba-500 p-6 text-white h-fit rounded-2xl">
                <Progres />
              </div>
            </div>
          </>
        </div>
        <div className="md:flex gap-4 h-full items-end">
          <div className="flex-1">
            <h1 className="text-5xl font-bold font-syne mt-24">
              Moving Your Products Across All Borders👋
            </h1>

            <div className="flex-1 relative md:hidden mt-8">
              <Image
                src="/images/SCL_2646aa - Copy.jpeg"
                alt="img"
                width={1080}
                height={1080}
                className="h-96 object-cover rounded-2xl object-top"
              />
              <div className="absolute bg-yellowaba-500 rounded-full p-4 bottom-32 left-4 z-10">
                <Plus size={16} />
              </div>
              <div className="bg-white absolute left-1/2 bottom-8 transform -translate-x-1/2 p-6 rounded-2xl w-full max-w-xs text-center">
                <h1 className="text-2xl font-semibold">Ari Mulyana Pratama</h1>
                <h2>Manager of PT. ARMADA BERKAT ANUGERAH</h2>
              </div>
            </div>

            <div className="bg-yellowaba-500 p-6 py-8 text-black h-fit mt-4 rounded-2xl">
              <h1 className="text-4xl font-bold font-syne">Vision</h1>
              <p className="text-xl mt-4 font-light">{t("vision-desc")}</p>
            </div>

            <div className="bg-bluelightaba-500 p-6 py-8 text-white h-fit mt-4 rounded-2xl">
              <h1 className="text-4xl font-bold font-syne">Mission</h1>
              <ul className="list-disc pl-4 text-xl mt-4 font-light">
                <li>{t("mission-1")}</li>
                <li className="pt-4">{t("mission-2")}</li>
                <li className="py-4">{t("mission-3")}</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 relative hidden md:block">
            <Image
              src="/images/SCL_2646aa.jpeg"
              alt="img"
              width={1080}
              height={1080}
              className="lg:h-[43rem] 2xl:h-[38rem] object-cover rounded-2xl object-top"
            />
            <div className="absolute bg-yellowaba-500 rounded-full p-4 bottom-20 left-16 2xl:left-20 z-10">
              <Plus size={36} />
            </div>
            <div className="bg-white absolute left-1/2 bottom-8 transform -translate-x-1/2 p-6 rounded-2xl w-full max-w-md text-center">
              <h1 className="text-2xl font-semibold">Ari Mulyana Pratama</h1>
              <h2>Manager of PT. ARMADA BERKAT ANUGERAH</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default AboutFull;
