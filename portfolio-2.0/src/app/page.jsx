"use client";


import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SvgBlobAnim from "../../components/server/svgBlobAnim";
import SvgBlobAnim2 from "../../components/server/svgBlobAnimNumber2";
import {Button} from '../../components/server/button';

import CardAbout from "../../components/server/cardAbout";
import CardHobbie from "../../components/server/cardHobbie";
import {data} from "./portfolio/page"; // Importing the data from the portfolio page  

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const [openPortfolio, setIsOpenPortfolio] = useState(null);

  async function openPortfolioCard(index) {
    setIsOpenPortfolio((prev) => (prev === index ? null : index));
   
  }

  useEffect(() => {
    console.log('openPortfolio changed to:', openPortfolio);
  }, [openPortfolio]);


  const text = [
    [
      <ul>
        <li>Rock Climbing</li>
        <li>Illustration</li>
        <li>Oil Painting</li>
        <li>Snowboarding</li>
        <li>Petting my cats (Arson and Gibb)</li>
      </ul>
    ]
    ,
    [
      <h1> Dani Norris</h1>,
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
      <div className="w-[100vw] top-0 sticky flex flex-col justify-items-center  justify-center bg-gradient-to-b from-black to-indigo-800">
        <div className="w-full h-screen flex flex-col justify-center items-center text-center">
     
          {/* <h1 className="hidden"> DANIELLA NORRIS </h1> */}
          <div className="mt-5 justify-center">
            <Image
              src="/me.jpeg"
              width="300"
              height="300"
              alt="Picture of me"
              className={`rounded-full border-b-purple-600 border-t-purple-600 border-8 w-[50vw] md:w-[25vw]  ${
                pageLoad

                  ? "transition-opacity duration-1000 ease-in opacity-100"
                  : "hidden"
              }`}
            />
          </div>
          <div className="grid-cols-1 grid mt-5 sm:justify-center justify-left items-center max-w-[100%]">
            <div className="relative items-center">
              {openHobbie ? (
                <></>
              ) : (
                <div
                  className={`${
                    openAbout
                      ? "w-[75px] h-[75px]"
                      : "sm:w-[300px] sm-h[200px] w-[200px] h-[175px] overflow-hidden"
                  }  flex justify-center items-center hover:cursor-pointer`}
                  onClick={openAboutCard}>
                  <SvgBlobAnim
                    width="100%"
                    height="100%"
                    className={`z-2${
                      pageLoad
                        ? "transition-opacity duration-1000 ease-in opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  {openHobbie || openAbout ? (
                    <></>
                  ) : (
                    <div className="absolute mt-5 text-md font-semibold pb-5 pr-3">
                      <p><b>About</b></p>
                    </div>
                  )}
                </div>
              )}
              <div className="float-right">
                <CardAbout
                  className="z-22 text-left"
                  setIsOpenAbout={setIsOpenAbout}
                  open={openAbout}
                  text={text[1]}
                />
              </div>
            </div>
            <div className="sm:inline-flex items-center">
              {openAbout ? (
                <></>
              ) : (
                <div
                  className={`${
                    openHobbie
                      ? "w-[75px] h-[75px]"
                      : "sm:w-[300px] sm:h-[200px] w-[200px] h-[150px] overflow-hidden"
                  }  flex justify-center items-center hover:cursor-pointer`}
                  onClick={openHobbieCard}>
                  <SvgBlobAnim2
                    width="100%"
                    height="100%"
                    className={`z-2  ${
                      pageLoad
                        ? "transition-opacity duration-1000 ease-in opacity-100 align-center"
                        : "opacity-0"
                    }`}
                  />
                  {openHobbie || openAbout ? (
                    <></>
                  ) : (
                    <div className="absolute mt-5 text-md font-semibold pb-5 pr-3">
                      <p><b>Hobbies</b></p>
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
          </div>
          <Image
          src="/arrowWhite.svg"
          alt="Arrow"
          width={24}
          height={24}
          className="z-20 animate-bounce mt-5 sm:mt-20"
        />
        </div>

        
      </div>

      {/* Welcome Section */}
      <div className="sticky w-[100vw] top-0 h-screen flex flex-col items-center text-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h1 className="transition-opacity duration-1000 ease-in opacity-100 p-10 inline-flex">
          Welcome to my portfolio
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
      <main className="w-[100vw] grid grid-cols-12 gap-2 p-10 flex-col sticky top-0 items-center h-screen justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        {data.map((item, index) => (
        <div key={index} onClick={() => openPortfolioCard(index)} className="text-xs grid col-span-12 border-rounded sm:h-1/2 rounded-3xl sm:col-span-6 p-6 bg-white text-black hover:bg-fuchsia-500 scale-100 hover:scale-[1.1] hover:z-20 transition-transform duration-300">
          <h2 className="text-sm col-span-2 md:col-span-1 hover:cursor-pointer">
            {item.title}
          </h2>
    
        </div>
         ))}
              {openPortfolio !== null ? (<div className="backdrop-blur-lg backdrop-blur-fix h-[100%] w-full fixed top-0 left-0 flex justify-center items-center z-50 bg-black/50">
              <div className="mt-4 text-left bg-black border-fuchsia-400 border-r-8 border-b-8 rounded-2xl w-[90vw] sm:w-[75vw] h-[75vh] relative p-10 text-white">
        <div className="hover:cursor-pointer" onClick={() => setIsOpenPortfolio(null)}> X</div>
        
        <h1> {data[openPortfolio].title} </h1>
        <h2> {data[openPortfolio].subtitle}</h2>
        <p> {data[openPortfolio].techStack}</p>
        <p> {data[openPortfolio].body}</p>
        <Button className="hover:cursor-pointer" href={data[openPortfolio].src}> <p>Go to page</p> </Button>
        </div>
       </div>) : null}
       
      </main>
    </div>
  );
}
