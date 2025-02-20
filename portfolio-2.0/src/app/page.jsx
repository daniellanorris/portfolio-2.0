'use client'

import React, {useState, useEffect} from "react";
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
      <div className={`${styles.page}`}>
        {/* Full-width Image */}
        <div className="relative w-[100vw] h-[400px]">
          <Image
            src="/teeveebrain.jpeg"
            alt="hero image, teevee brain logo"
            layout="fill"
            objectFit='cover'
            quality={100}
          />
        </div>

        {/* Full-width Welcome Section */}
        <div className=" overscroll-contain w-[100vw] h-[100vh] flex items-center justify-center bg-white text-black text-3xl font-bold">
          <blockquote className={`${pageLoad ? "transition-opacity duration-1000 ease-in opacity-100": "opacity-0"}`}>Welcome to my site!</blockquote>
          <p> </p>
        
        </div>

        {/* Main Content */}
        <main className="grid grid-cols-12 p-10 gap-4 overflow-visible z-10">
          <div className="grid col-span-12 md:col-span-6 p-4 bg-white text-black hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h1 className="col-span-2 md:col-span-1">Capstone Project - Tatt2 Web Application</h1>
            <div className="hidden md:block">
              <Image width="100" height="100" src="/tatt2.png" alt="tatt2 logo" />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 p-4 bg-black text-white hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h1>Historical Preservation - Marketing Mockup</h1>
          </div>
          <div className="md:col-span-6 col-span-12 p-4 bg-black text-white hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
            <h1>Toot Brewery Management Web Application</h1>
          </div>
        </main>
      </div>
    </>
  );
}
