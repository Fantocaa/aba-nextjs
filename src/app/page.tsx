import Header from "@/components/home/Header";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Home | PT. BERLIMPAH ANUGERAH SEJATI",
  description:
    "Kami membawa produk Anda ke seluruh penjuru Indonesia dengan layanan distribusi yang handal dan efisien.",
};

export default function Home() {
  return (
    <main className="bg-whitebas">
      <Header />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
