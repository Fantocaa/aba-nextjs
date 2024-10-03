import { useTranslations } from "next-intl";
import React from "react";
import ImageRecent from "./ImageRecent";

export default function FirstImageTrans() {
  const t = useTranslations("Recent-Home");

  const subtitle = t("subtitle");
  return (
    <>
      <ImageRecent subtitle={subtitle} />
    </>
  );
}
