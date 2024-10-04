"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideMail, Phone, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useLocale } from "next-intl";
import LocalSwitcher from "../local-switcher";

interface NavLink {
  id: number;
  name: string;
  path: string;
}

export default function MainNav({ NavLinks }: { NavLinks: NavLink[] }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Periksa apakah arah scroll berubah
      if (isScrollingDown && isVisible) {
        setIsVisible(false); // Sembunyikan navbar jika sedang digulir ke bawah
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true); // Tampilkan navbar jika sedang digulir ke atas
      }
      setPrevScrollPos(currentScrollPos); // Simpan posisi scroll saat ini

      // Periksa apakah halaman telah digulir ke bawah
      if (currentScrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener untuk meng-handle scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  // Variabel untuk mengatur durasi animasi
  const transitionDuration = 0.2;

  // Variabel untuk mengatur animasi navbar saat muncul atau menghilang
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Jalankan animasi menggunakan Framer Motion controlsl
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleClick = () => {
  //   console.log("Link clicked:"); // Ganti ini dengan logika pelacakan analytics
  //   // Misalnya menggunakan Google Analytics atau layanan lain
  //   // gtag('event', 'click', { 'event_category': 'Navigation', 'event_label': link.name });
  // };

  const locale = useLocale();

  const pathname = usePathname();
  const isActive = (path: string) => {
    const localizedPath = `/${locale}${path === "/" ? "" : path}`;
    return pathname === localizedPath;
  };

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Tutup sidebar hanya jika path berubah
      if (isOpen) {
        setIsOpen(false);
      }
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname, isOpen]);
  return (
    <>
      <header>
        <motion.div
          className={`fixed top-0 left-0 right-0 z-50 ${
            isScrolled
              ? "bg-white bg-opacity-80 backdrop-blur"
              : "bg-transparent"
          }  transition-colors duration-500`}
          initial="visible"
          animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="container">
            <div className="flex items-center justify-between py-2 2xl:py-4">
              <Link href="/">
                <div className="md:flex md:items-center md:gap-4">
                  <>
                    <div>
                      <span className="sr-only">Home</span>
                      <Image
                        src="/images/logo/Group 5.png"
                        alt="logo"
                        width={48}
                        height={48}
                        className="w-full h-full"
                      />
                    </div>
                  </>
                  <>
                    <div className="hidden md:block">
                      <h1
                        className={`font-medium text-xs lg:text-base text-${
                          isScrolled
                            ? "black transition-colors duration-500"
                            : "white"
                        }`}
                      >
                        PT. ARMADA BERKAT ANUGERAH
                      </h1>
                    </div>
                  </>
                </div>
              </Link>

              <div className="flex gap-2">
                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    // className="text-white focus:outline-none"
                    className={`focus:outline-none ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>

                <NavigationMenu className="hidden md:block">
                  <NavigationMenuList>
                    {NavLinks.slice(0, 3).map((link) => (
                      <NavigationMenuItem key={link.id}>
                        <Link
                          href={link.path}
                          className={isActive(link.path) ? "active" : ""}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} ${
                              isActive(link.path)
                                ? "active bg-yellowaba-500 hover:bg-yellowaba-600 font-semibold text-darkaba"
                                : `font-medium bg-transparent ${
                                    isScrolled
                                      ? "text-black transition-colors duration-500 hover:bg-blue-50"
                                      : "text-white"
                                  }`
                            }`}
                          >
                            {link.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}

                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="https://karier.tako.co.id/"
                        target="__blank"
                        className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-medium bg-transparent ${
                          isScrolled
                            ? "text-black transition-colors duration-500 hover:bg-blue-50"
                            : "text-white"
                        }`}
                      >
                        {NavLinks.find((link) => link.id === 4)?.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="md:flex items-center gap-2 hidden">
                <LocalSwitcher />
                <div className="md:flex items-center gap-4 hidden">
                  <div className="sm:flex sm:gap-4">
                    <Link href="/contact">
                      <Button
                        variant="secondary"
                        className="bg-yellowaba-500 hover:bg-yellowaba-600 text-darkaba rounded-full"
                      >
                        <div className="flex gap-2 items-center">
                          <LucideMail />
                          <h1>
                            {NavLinks.find((link) => link.id === 5)?.name}
                          </h1>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>

            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:hidden fixed inset-0 overflow-hidden z-50"
            >
              <div className="flex h-screen flex-col justify-between border-e bg-white w-1/2 ">
                <div className="px-4 py-6">
                  <div className="flex justify-between">
                    <Link className="block text-teal-600" href="/">
                      <span className="sr-only">Home</span>
                      <Image
                        src="/images/logo/Group 5.png"
                        alt="logo"
                        width={64}
                        height={64}
                        className="w-16 md:w-40"
                      />
                    </Link>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-darkpint"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <ul className="mt-6 space-y-1">
                    {NavLinks.slice(0, 3).map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.path}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="https://karier.tako.co.id/"
                        passHref
                        target="__blank"
                      >
                        <h1 className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                          {NavLinks.find((link) => link.id === 4)?.name}
                        </h1>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="fixed z-50 bottom-10 right-4 md:right-10 2xl:right-24">
        <div className="relative">
          {!showDropdown ? (
            <button
              className="rounded-full p-5 bg-yellowaba-500 shadow-xl hover:bg-yellowaba-400 transition-all duration-200"
              onClick={toggleDropdown}
            >
              <Phone size={32} />
            </button>
          ) : (
            <button
              className="rounded-full p-5 bg-red-500 shadow-xl hover:bg-red-600 transition-all duration-200 text-white"
              onClick={toggleDropdown}
            >
              <X size={32} />
            </button>
          )}
          {showDropdown && (
            <div className="absolute bottom-[5.5rem] right-0 py-2 w-48 bg-white rounded-lg shadow-xl">
              <div className="py-1">
                <Link href="#" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Surabaya
                    </button>
                  </div>
                </Link>
                <Link href="#" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Makassar
                    </button>
                  </div>
                </Link>
                <Link href="#" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Gorontalo
                    </button>
                  </div>
                </Link>
                <Link href="#" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Manado
                    </button>
                  </div>
                </Link>
                <Link href="#" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Semarang
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
