import React from "react";
import Image from "next/image";
import AboutFull from "./AboutFull";

const Header = () => {
  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="relative h-full">
              <Image
                alt="hero"
                src="/images/DSC07958.JPG"
                className="h-[75dvh] 2xl:h-[50dvh] w-full object-cover"
                width={2560}
                height={2560}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blueaba-500 opacity-90"></div>
            </div>
          </div>
        </div>

        <div className="relative container lg:flex lg:h-[75dvh] 2xl:h-[50dvh] lg:items-center py-44 md:py-0 justify-center">
          <p className="mt-12 max-w-lg sm:text-6xl/relaxed text-white">
            About Us
          </p>
        </div>
      </section>
      <section>
        <AboutFull />
      </section>
    </>
  );
};

export default Header;
