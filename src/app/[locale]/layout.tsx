import { Montserrat, Syne, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CTA from "@/components/home/CTA";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { GoogleTagManager } from "@next/third-parties/google";

// const montserrat = Montserrat({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <GoogleTagManager gtmId="G-MN20R5S4DM" />
      </head>
      <body
        // ${montserrat.className}
        className={`
          ${syne.className} ${outfit.className}`}
      >
        <Navbar />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {/* <CTA /> */}
        <Footer />
      </body>
    </html>
  );
}
