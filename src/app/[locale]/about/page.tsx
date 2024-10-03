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

export const metadata: Metadata = {
  title: "About | PT. BERLIMPAH ANUGERAH SEJATI",
  description:
    "Kami membawa produk Anda ke seluruh penjuru Indonesia dengan layanan distribusi yang handal dan efisien.",
};

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
