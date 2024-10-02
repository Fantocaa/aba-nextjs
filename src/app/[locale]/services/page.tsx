import React from "react";
import CallToAction from "@/components/home/CallToAction";
import ImageRecent from "@/components/home/ImageRecent";
import Header from "@/components/services/Header";
import Main from "@/components/services/Main";
import type { Metadata } from "next";
import Sector from "@/components/home/Sector";

export const metadata: Metadata = {
  title: "Services | PT. ARMADA BERKAT ANUGERAH",
  description:
    "Kami membawa produk Anda ke seluruh penjuru Indonesia dengan layanan distribusi yang handal dan efisien.",
};

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
