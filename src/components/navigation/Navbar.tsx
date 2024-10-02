import React from "react";
import { useTranslations } from "next-intl";
import MainNav from "./main-nav/main-nav";

const Navbar = () => {
  const t = useTranslations("Navigation-Bar");

  const NavLinks = [
    { id: 1, name: `${t("home")}`, path: "/" },
    { id: 2, name: `${t("about")}`, path: "/about" },
    { id: 3, name: `${t("service")}`, path: "/services" },
    { id: 4, name: `${t("career")}`, path: "https://karier.tako.co.id/" },
    { id: 5, name: `${t("contact")}`, path: "/contact" },
  ];

  return (
    <>
      <MainNav NavLinks={NavLinks} />
    </>
  );
};

export default Navbar;
