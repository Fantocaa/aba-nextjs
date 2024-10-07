// import type { Metadata } from "next";
// import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import Sector from "@/components/home/Sector";
// import ImageRecent from "@/components/home/ImageRecent";
// import CTA from "@/components/home/CTA";
// import Footer from "@/components/navigation/Footer";
import FirstHeaderTrans from "@/components/home/FirstHeaderTrans";
import Main from "@/components/services/Main";
import FirstImageTrans from "@/components/home/FirstImageTrans";
import { getTranslations } from "next-intl/server";
interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataHome" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <main className="bg-whitebas">
      <FirstHeaderTrans />
      {/* <Header /> */}
      <CallToAction />
      {/* <WhyChooseUs /> */}
      <Main />
      <Sector />
      <FirstImageTrans />
      {/* <ImageRecent /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
