import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhychooseUs");

  return (
    <section className="py-16">
      <div className="bg-blueaba-500 relative text-white overflow-hidden">
        <div className="container relative z-10 py-16">
          <h1 className="font-semibold text-5xl pb-4 text-center font-syne">
            {t("title")}{" "}
            <span className="text-yellowaba-500">{t("title-1")}</span>?
          </h1>
          <div className="md:grid grid-cols-2 mt-16 items-center">
            <Image
              src="/images/commit.svg"
              alt="commit"
              width={1080}
              height={1080}
              className="order-last"
            />
            <div className="max-w-xl pt-8 md:pt-0">
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
          </div>
          <div className="md:grid grid-cols-2 mt-8 items-center">
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
              className="hidden md:block"
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
