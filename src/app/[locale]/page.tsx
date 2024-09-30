import Header from "@/components/home/Header";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/navigation/Footer";
import CallToAction from "@/components/home/CallToAction";
import Sector from "@/components/home/Sector";
import ImageRecent from "@/components/home/ImageRecent";

export const metadata: Metadata = {
  title: "Home | PT. ARMADA BERKAT ANUGERAH",
  description:
    "Kami membawa produk Anda ke seluruh penjuru Indonesia dengan layanan distribusi yang handal dan efisien.",
};

export default function Home() {
  return (
    <main className="bg-whitebas">
      <Header />
      <CallToAction />
      <WhyChooseUs />
      <Sector />
      <ImageRecent />
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
