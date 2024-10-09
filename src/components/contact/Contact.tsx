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
          className="flex flex-col items-center justify-center gap-4"
          // ref={ref}
        >
          <section className="bg-white dark:bg-gray-900 w-full">
            <div className="mx-auto">
              <h2 className="text-left text-3xl tracking-tight font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 sm:text-lg mb-8">
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
