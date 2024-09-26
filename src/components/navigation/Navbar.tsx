"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideMail, Phone } from "lucide-react";
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

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  // { id: 3, name: "Services", path: "/services" },
];

const Navbar = () => {
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

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Tutup sidebar hanya jika path berubah
      if (isOpen) {
        setIsOpen(false);
      }
      // Perbarui prevPathname untuk memantau perubahan berikutnya
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
                        src="/images/logo/LOGO PT. BERLIMPAH ANUGERAH SEJATI 2.png"
                        alt="logo"
                        width={40}
                        height={40}
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
                        PT. BERLIMPAH ANUGERAH SEJATI
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
                    {NavLinks.map((link) => (
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
                                ? "active bg-redbas-500 hover:bg-redbas-600 hover:text-white font-semibold text-white"
                                : `font-medium bg-transparent ${
                                    isScrolled
                                      ? "text-black transition-colors duration-500"
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
                            ? "text-black transition-colors duration-500"
                            : "text-white"
                        }`}
                      >
                        Careers
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <div className="md:flex items-center gap-4 hidden">
                  <div className="sm:flex sm:gap-4">
                    <Link href="/contact">
                      <Button
                        variant="secondary"
                        className="bg-redbas-500 hover:bg-redbas-600 text-white rounded-full"
                      >
                        <div className="flex gap-2 items-center">
                          <LucideMail />
                          <h1>Hubungi Kami</h1>
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
                        src="/images/logo/LOGO PT. BERLIMPAH ANUGERAH SEJATI 2.png"
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
                    {NavLinks.map((link) => (
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
                          Careers
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
          <button
            className="rounded-full p-6 bg-green-500 shadow-xl hover:bg-green-300"
            onClick={toggleDropdown}
          >
            <Phone size={32} />
          </button>
          {showDropdown && (
            <div className="absolute bottom-24 right-0 py-2 w-48 bg-white rounded-lg shadow-xl">
              <div className="py-1">
                <Link href="https://wa.link/j9utdx" target="__blank">
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    {/* <LucideGlobe /> */}
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Bali
                    </button>
                  </div>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=6282322219073"
                  target="__blank"
                >
                  <div className="flex items-center hover:bg-gray-200 px-4 py-2 gap-4">
                    {/* <LucideGlobe /> */}
                    <Phone />
                    <button className="text-sm text-gray-800 text-left">
                      Branch Mataram
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
};

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

export default Navbar;
