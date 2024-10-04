import React from "react";
import Header from "@/components/contact/Header";
import { Button } from "@/components/ui/button";
import ContactApi from "@/components/contact/Contact";
import CTA from "@/components/home/CTA";
import Footer from "@/components/navigation/Footer";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataHome" });

  return {
    title: t("contact"),
    description: t("description"),
  };
}

export default function Contact() {
  return (
    <>
      <Header />
    </>
  );
}
