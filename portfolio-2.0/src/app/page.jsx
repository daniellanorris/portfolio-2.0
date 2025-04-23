"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "../../components/client/button";
import { data } from "./portfolio/page";
import animateInView from "../../controllers/animateInView";

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const [openPortfolio, setIsOpenPortfolio] = useState(null);
  const animationReference = useRef(null);

  useEffect(() => {
    if (animationReference.current) {
      animateInView(animationReference);
      console.log("Animation reference set", animationReference.current);
    }
  }, []);

  async function openPortfolioCard(index) {
    setIsOpenPortfolio((prev) => (prev === index ? null : index));
  }

  const text = [
    [
      <ul>
        <li>Rock Climbing</li>
        <li>Illustration</li>
        <li>Oil Painting</li>
        <li>Snowboarding</li>
        <li>Petting my cats (Arson and Gibb)</li>
      </ul>,
    ],
    [
      <h1> Dani Norris</h1>,
      <b>(She/her)</b>,
      "The goal is to inspire end-users to fully take control of the product in question. With a strong background in web design, customer success, and the hospitality industry, I am uniquely positioned to provide real-world insight to clients.",
    ],
  ];

  useEffect(() => {
    setPageLoad(true);
    console.log("Page loaded");
    return () => setPageLoad(false);
  }, []);

  return (
    <div
      className={`${styles.page} snap-y snap-mandatory overflow-y-scroll h-[100vh]`}>
      {/* Full-width Hero Section */}
      <div className="w-full h-[100vh] flex flex-col justify-items-center justify-center bg-gradient-to-b from-black to-indigo-900 snap-start snap-mandatory">
        <div className="grid md:grid-cols-4 grid-cols-1">
          {/* First Column */}
          <div className="col-span-1 md:col-span-3">
            <div className="bigHeader text-left leading-none text-6xl sm:text-[150px] tracking-tight">
              <div className="animate-in">
                <b className=" text-emerald-200">Web</b>
              </div>{" "}
              <div className="animate-in">Developer.</div>
            </div>
            <div className="sm:inline-flex">
              <div className="pr-6 sm-pr-0">
                <div className="border-white rounded-3xl border-r-6 w-[100%] sm:w-[80%] mt-5 animate-in">
                  <p className="p-5 pb-0 animate-in">
                    {" "}
                    Hey! I'm{" "}
                    <b className="text-emerald-400 animate-in">Dani Norris</b>,
                    a front-end web developer on a journey to discover how we
                    can optimize products for end-users. I have a large swath of
                    experience in software, POS and ERP systems, API
                    interactions, and the restaurant industry.{" "}
                  </p>
                  <div className="flex align-middle text-center items-center p-5">
                    
                    <p> <b>Location:</b> Denver, CO</p>
                  </div>
                </div>
                <div className="flex justify-left gap-4 pl-5 pb-2 sm:p-5 animate-in">
                  <Button
                    text="Contact Me"
                    className="hover:cursor-pointer"
                    href="/feedback">
                    <p>Contact Me</p>
                  </Button>
                </div>
              </div>
              {/* <div className="flex justify-center mt-5">
            <Image
            src='/me.jpeg'
            width={300}
            height={100}
            className='rounded-full justify-center' />
          </div> */}
            </div>
          </div>
          <div className="flex justify-center mt-5 items-start">
            <div className="col-span-1 md:col-start-4 md:flex inline-flex md:flex-col justify-center justify-items-center justify-content-center space-x-5">
              <a href="https://github.com/daniellanorris?tab=repositories">
                <img
                  width="50px"
                  height="auto"
                  src="/images/github-mark-fuchsia.svg"
                  className="animate-in"></img>
              </a>
              <a href="https://www.linkedin.com/in/daniella-norris/">
                <img
                  width="50px"
                  height="auto"
                  src="/images/LinkedIn_icon.svg"
                  className="animate-in md:mt-5 border-4 border-fuchsia-500 p-1 rounded-2xl"></img>
              </a>
            </div>
          </div>

          
        </div>
        <div className="flex justify-center w-full">
            <Image
              src="/images/arrowWhite.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="z-20 animate-bounce mt-5 sm:mt-20"
            />
          </div>
      </div>

      {/* Welcome Section */}
      <div className="snap-start snap-always text-center flex flex-col w-[100vw] align-middle h-screen bg-gradient-to-b from-indigo-900 to-purple-800 text-white justify-center">
     
        <div className="align-middle inline-flex flex-col h-full p-5">
          <div>
          <div className="bigHeader text-right leading-none text-6xl sm:text-[150px] tracking-tight">
              <div className="animate-in">
                <b className=" text-emerald-200">Tech</b>
              </div>{" "}
              <div className="animate-in">Stuff.</div>
            </div>
          
          </div>
          <div
            ref={animationReference}
            className={`${
              animationReference ? `inline-flex items-center` : `opacity-0`
            }`}>
            <div className="flex flex-wrap gap-4 items-center mt-10 justify-center">
              <h2> Languages & Frameworks </h2>
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                <Image
                  src="/techStack/logo_dark.svg"
                  alt="Logo Dark"
                  width={100}
                  height={100}
                />
              </div>
              <Image
                src="/techStack/logo_node.png"
                alt="Node.js Logo"
                width={100}
                height={100}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              />

              <Image
                className="rounded-3xl"
                src="/techStack/express.png"
                alt="Express.js Logo"
                width={100}
                height={50}
              />

              <Image
                className="rounded-3xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                src="/techStack/javascriptlogo.png"
                alt="JavaScript Logo"
                width={100}
                height={100}
              />
              <Image
                className="rounded-3xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                src="/techStack/docker.png"
                alt="Docker Logo"
                width={100}
                height={100}
              />
              <Image
                className="rounded-3xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                src="/techStack/css.png"
                alt="CSS Logo"
                width={100}
                height={100}
              />
              <Image
                className="rounded-3xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                src="/techStack/html.png"
                alt="HTML Logo"
                width={100}
                height={100}
              />
              <Image
                className="rounded-3xl bg-white p-4"
                src="/techStack/tailwindcss-logotype.svg"
                alt="Tailwind CSS Logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="justify-content-center mt-10">
            <Image
              src="/images/arrowWhite.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="animate-bounce justify-self-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col snap-start snap-always items-center text-center w-[100vw] min-h-screen bg-gradient-to-b from-purple-800 to-pink-800 text-white justify-center">
        <div className="flex flex-col items-center justify-center align-middle h-full p-5 pb-0">
          <div
            ref={animationReference}
            className={`${
              animationReference ? `inline-flex items-center` : `opacity-0`
            }`}>
            <div>
            <div className="bigHeader text-left leading-none text-6xl sm:text-[150px] tracking-tight">
              <div className="animate-in">
                <b className=" text-emerald-200">More</b>
              </div>{" "}
              <div className="animate-in">Tech Stuff.</div>
            </div>
              <div className="flex flex-wrap gap-4 items-center mt-10 justify-center">
                
                <h2> Database Solutions </h2>
                <Image
                  src="/techStack/aws.png"
                  alt="AWS Logo"
                  width={100}
                  height={100}
                />

                <div className="bg-white rounded-3xl p-1 flex gap-4 ">
                  <Image
                    className="rounded-3xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                    src="/techStack/mongo.png"
                    alt="MongoDB Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <Image
                  src="/techStack/sql.png"
                  alt="SQL Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                />
              </div>
            </div>
          </div>
          <div className="justify-content-center mt-10">
            <Image
              src="/images/arrowWhite.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="transition animate-in justify-self-center"
            />
          </div>
        </div>
      </div>


      <main className="snap-start snap-always w-[100vw] space-y-6 h-[100vh] flex pb-20 flex-col align-middle items-center justify-center justify-items-center p-5 bg-gradient-to-b from-pink-800 to-black text-white">
      <div className="mt-0 bigHeader text-right leading-none text-6xl sm:text-[150px] tracking-tight">
              <div className="animate-in">
                <b className=" text-emerald-200">The</b>
              </div>{" "}
              <div className="animate-in">Good Stuff.</div>
      
        <p> Interested in seeing my work?</p>
        <Button
          href="/portfolio"
          text="View Projects"
          className="items-center"></Button>
        <p> Or, to heck with my work. Let's cut to the chase.</p>
        </div>
          <Button text="Download Portfolio" className="items-center" href="/techStack/Resume_Norris_Current.pdf" download></Button>

      </main>
    </div>
  );
}
