// "use client";

import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import FormEmail from "./FormEmail";

interface HeaderProps {
  subline: string;
  title: string;
}

function Contact({ subline, title }: HeaderProps) {
  return (
    <>
      <>
        <main
          className="flex min-h-screen flex-col items-center justify-center p-24 gap-4"
          // ref={ref}
        >
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                {subline}
              </p>
              <FormEmail />
            </div>
          </section>
        </main>
      </>
    </>
  );
}

export default Contact;
