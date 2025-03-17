"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SvgBlobAnim from "../../components/svgBlobAnim";
import SvgBlobAnim2 from "../../components/svgBlobAnimNumber2";

import CardAbout from "../../components/cardAbout";
import CardHobbie from "../../components/cardHobbie";

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const text = [
    [
      "Rock Climbing",
      "Illustration",
      "Oil Painting",
      "Petting my cats (Arson and Gibb)",
    ],
    [
      <b>(She/her)</b>,
      "The goal is to inspire end-users to fully take control of the product in question. With a strong background in web design, customer success, and the hospitality industry, I am uniquely positioned to provide real-world insight to clients.",
    ],
  ];

  const [openAbout, setIsOpenAbout] = useState(false);
  const [openHobbie, setIsOpenHobbie] = useState(false);

  function openHobbieCard() {
    if (openHobbie) {
      setIsOpenHobbie(false);
      console.log("closed");
    } else {
      setIsOpenHobbie(true);
      console.log("opened");
    }
    // Toggle state on click
  }
  function openAboutCard() {
    if (openAbout) {
      setIsOpenAbout(false);
      console.log("closed");
    } else {
      setIsOpenAbout(true);
      console.log("opened");
    }
    // Toggle state on click
  }

  useEffect(() => {
    setPageLoad(true);
    console.log("Page loaded");
    return () => setPageLoad(false);
  }, []);

  return (
    <div className={`${styles.page}`}>
      {/* Full-width Hero Section */}
      <div className="w-[100vw] top-0 sticky h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <div className="flex flex-col items-center text-center w-[75vw]">
          {/* Top Blob */}
          <div className="sm:inline-flex items-center">
            {openAbout ? (<></>) : (
            <div
              className={`${openHobbie ? "w-[75px] h-[75px]" : "w-[300px] h-[200px] overflow-hidden"}  flex justify-center items-center hover:cursor-pointer`}
              onClick={openHobbieCard}>
              <SvgBlobAnim2
                width="100%"
                height="100%"
                className={`z-2  ${
                  pageLoad ? "transition-opacity duration-1000 ease-in opacity-100" : "opacity-0"
                }`}
              />
              {openHobbie || openAbout ? (<></>) : (
              <div className="absolute mt-5 text-md font-semibold pb-5 pr-3">
                <p>HOBBIES</p>
              </div>
            )}
            </div>
            )}
            <div className="sm:float-right">
              <CardHobbie
                className="z-22"
                setIsOpenHobbie={setIsOpenHobbie}
                open={openHobbie}
                text={text[0]}
              />
            </div>
          </div>
        
            <div className="mt-5">
              <Image
                src="/me.jpeg"
                width="300"
                height="300"
                alt="Picture of me"
                className={`rounded-full border-b-purple-600 border-t-purple-600 border-8  ${
                  pageLoad ? "transition-opacity duration-1000 ease-in opacity-100" : "opacity-0"
                }`}
              />
            </div>
     
          <div className="sm:inline-flex relative items-center">
          {openHobbie ? (<></>) : (
            <div
              className={`${openAbout ? "w-[75px] h-[75px]" : "w-[300px] h-[200px] overflow-hidden"}  flex justify-center items-center hover:cursor-pointer`}
              onClick={openAboutCard}>
              <SvgBlobAnim
                width="100%"
                height="100%"
                className={`z-2${
                  pageLoad ? "transition-opacity duration-1000 ease-in opacity-100" : "opacity-0"
                }`}
              />
              {openHobbie || openAbout ? (<></>) : (
              <div className="absolute mt-5 text-md font-semibold pb-5 pr-3">
                <p>ABOUT</p>
              </div>
            )}
            </div>
            )}
            <div className="sm:float-right">
              <CardAbout
                className="z-22"
                text={text[1]}
                setIsOpenAbout={setIsOpenAbout}
                open={openAbout}
              />
            </div>
          </div>
        </div>

        <Image
          src="/arrow.svg"
          alt="Arrow"
          width={24}
          height={24}
          className="z-20 animate-bounce mt-5"
        />
      </div>

      {/* Welcome Section */}
      <div className="sticky w-[100vw] top-0 h-screen flex flex-col items-center text-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h1 className="transition-opacity duration-1000 ease-in opacity-100 pb-10 inline-flex">
          WELCOME TO MY PORTFOLIO
        </h1>
        <Image
          src="/arrowWhite.svg"
          alt="Arrow"
          width={24}
          height={24}
          className="z-20 animate-bounce"
        />
      </div>

      {/* Main Content */}
      <main className="w-[100vw] grid grid-cols-12 p-10 gap-4 sticky top-0 flex-col items-center h-screen justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <div className="grid col-span-12 md:col-span-6 p-6 bg-white text-black hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
          <h2 className="col-span-2 md:col-span-1">
            Capstone Project - Tatt2 Web Application
          </h2>
          <div className="hidden md:block">
            <Image width="100" height="100" src="/tatt2.png" alt="tatt2 logo" />
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
  );
}
