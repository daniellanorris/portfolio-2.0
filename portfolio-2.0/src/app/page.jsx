"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
    console.log("Page loaded");
    return () => {
      setPageLoad(false);
    };
  }, []);

  return (
    <>
      <div className={`${styles.page} relative`}>
        {/* Full-width Image */}
        <div className="w-[100vw] sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
          <Image
            src="/me.jpeg"
            width="300"
            height="300"
            alt="Picture of me"
            className={`rounded-full border-amber-600 border-8 mb-10 ${
              pageLoad
                ? "transition-opacity duration-1000 ease-in opacity-100"
                : "opacity-0"
            }`}
          />
          <Image src="/arrow.svg" alt="Arrow" width={24} height={24} className="z-20 animate-bounce" />
        </div>

        {/* Full-width Welcome Section */}
        <div className="sticky top-0 w-[100vw] h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <h1
            className={`${
              pageLoad
                ? "transition-opacity duration-1000 ease-in opacity-100 pb-10"
                : "opacity-0"
            }`}>
            WELCOME TO MY PORTFOLIO
          </h1>
          <Image src="/arrow.svg" alt="Arrow" width={24} height={24} className="z-20 animate-bounce" />
          <p> </p>

        </div>
        {/* Main Content */}
        <main className="w-[100vw] grid grid-cols-12 p-10 gap-4 overflow-visible z-10 sticky top-0 flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <div className="grid col-span-12 md:col-span-6 p-6 bg-white text-black hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h2 className="col-span-2 md:col-span-1">
              Capstone Project - Tatt2 Web Application
            </h2>
            <div className="hidden md:block">
              <Image
                width="100"
                height="100"
                src="/tatt2.png"
                alt="tatt2 logo"
              />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 p-6 bg-black text-white hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h2>Historical Preservation - Marketing Mockup</h2>
          </div>
          <div className="md:col-span-6 col-span-12 p-6 bg-black text-white hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h2>Toot Brewery Management Web Application</h2>
          </div>
        </main>
      </div>
    </>
  );
}
