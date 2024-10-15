import { Montserrat, Syne, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CTA from "@/components/home/CTA";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-MN20R5S4DM');
            `,
          }}
        />
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
