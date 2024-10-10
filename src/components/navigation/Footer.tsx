import React from "react";
import Image from "next/image";
// import { Separator } from "@/components/ui/separator";
// import { ArrowUpRight } from "lucide-react";
// import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const t = useTranslations("Navigation-Bar");

  const NavLinks = [
    { id: 1, name: t("home"), path: "/" },
    { id: 2, name: t("about"), path: "/about" },
    { id: 3, name: t("service"), path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <footer className="bg-blueaba-500 text-white">
        <div className="container pb-6 pt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
            <div>
              <div className="flex justify-center sm:justify-start">
                <Link href="/" className="flex items-center gap-4 ">
                  <Image
                    src="/images/logo/Group 5.png"
                    alt="logo"
                    width={64}
                    height={64}
                  />
                  <h1 className="font-bold text-darkpint">
                    PT. ARMADA BERKAT ANUGERAH
                  </h1>
                </Link>
              </div>

              <p className="my-6 max-w-lg leading-relaxed sm:max-w-xl sm:text-left">
                {t("footer")}
              </p>

              <Link href="/contact">
                <button className="text-sm font-semibold rounded-full bg-yellowaba-500 px-8 py-2 shadow hover:bg-yellowaba-600 focus:outline-none focus:ring active:bg-yellowaba-500 text-black">
                  Contact Us
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 lg:col-span-2">
              <div></div>
              <div></div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium">{t("link")}</p>

                <ul className="mt-8 space-y-4 text-sm flex md:block gap-4">
                  {NavLinks.map((link) => (
                    <li key={link.id} className="mt-4 mb-0 mx-auto">
                      <Link
                        className="text-white transition hover:text-white/75 mt-0"
                        href={link.path}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-4 mb-0 mx-auto">
                    <Link
                      href="https://karier.tako.co.id/"
                      target="__blank"
                      className="text-white transition hover:text-white/75 mt-0"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left mt-8 md:mt-0 col-span-2">
                <p className="text-lg font-medium text-white">{t("contact")}</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <div className="flex items-center justify-center gap-4 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="flex-1">
                        <span className="flex text-white pb-1">
                          +62 812 9048 4892 (Surabaya)
                        </span>
                        <span className="flex text-white pb-1">
                          +62 812 3122 7180 (Semarang)
                        </span>
                        <span className="flex text-white pb-1">
                          +62 812 354 2688 (Gorontalo)
                        </span>
                        <span className="flex text-white pb-1">
                          +62 822 9637 0375 (Manado)
                        </span>
                        <span className="flex text-white">
                          +62 811 308 9090 (Makassar)
                        </span>
                        {/* <span className="flex text-gray-700">031-3537 981</span> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center gap-4 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="flex-1">
                        <span className="flex text-white">
                          info@armadaberkat.com
                        </span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center gap-4 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="flex-1">
                        <span className="flex not-italic text-white text-left">
                          Jl. Perak Timur No.110 Kec. Pabean Cantikan Surabaya,
                          Jawa Timur
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 mb-6 md:mb-0">
            <div className="text-center sm:flex sm:justify-center sm:text-center">
              <p className="text-xs text-white text-center">
                &copy; {currentYear}. PT. ARMADA BERKAT ANUGERAH. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
