import { useTranslations } from "next-intl";
import React from "react";
import Header from "./Header";

export default function FirstHeaderTrans() {
  const t = useTranslations("Header-Home");
  const subline = t("subtitle");
  return (
    <>
      <Header subline={subline} />
    </>
  );
}
