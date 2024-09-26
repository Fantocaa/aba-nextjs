import { Button } from "@/components/ui/button";
import ContactApi from "@/components/contact/Contact";
import Header from "@/components/contact/Header";
import CTA from "@/components/home/CTA";
import Footer from "@/components/navigation/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PT. BERLIMPAH ANUGERAH SEJATI",
  description:
    "Kami membawa produk Anda ke seluruh penjuru Indonesia dengan layanan distribusi yang handal dan efisien.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
