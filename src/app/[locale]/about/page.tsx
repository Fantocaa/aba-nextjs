import Header from "@/components/about/Header";
import React from "react";
import type { Metadata } from "next";
import Motto from "@/components/about/Motto";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/navigation/Footer";
import CallToAction from "@/components/home/CallToAction";
import ImageRecent from "@/components/home/ImageRecent";
import FirstImageTrans from "@/components/home/FirstImageTrans";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataAbout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function About() {
  return (
    <main className="bg-whitebas">
      <Header />
      {/* <Motto /> */}
      <WhyChooseUs />
      {/* <CTA /> */}
      <CallToAction />
      {/* <ImageRecent /> */}
      <FirstImageTrans />
    </main>
  );
}
