import React from "react";
import CallToAction from "@/components/home/CallToAction";
import ImageRecent from "@/components/home/ImageRecent";
import Header from "@/components/services/Header";
import Main from "@/components/services/Main";
import type { Metadata } from "next";
import Sector from "@/components/home/Sector";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataServices" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Services() {
  return (
    <>
      <main className="bg-whitebas">
        <Header />
        <Main />
        <Sector />
        <CallToAction />
        {/* <ImageRecent /> */}
      </main>
    </>
  );
}
