import React from "react";
import styles from "../page.module.css";
import PortfolioCard from "../../../components/server/portfolioCard";

export default function Portfolio() {
  const data = [
    {
      title: "Tatt2 Web Application",
      body: "A web application for tattoo artists and tattoo seekers.",
      image: "/udemy.png",
    },
    {
      title: "Toot Brewery Management Web Application",
      body: "A web application for taproom managers and brewers.",
      image: "/udemy.png",
    },
    {
      title: "Portiko Technologies Design Brief",
      body: "A portfolio showcasing logo, text, and color design for a faux company.",
      image: "/portiko/portiko_logo.png",
      techStack: "Adobe Indesign, Abobe Illustrator",
      headerImage: "/portiko/Portiko_Tab.png",
      exampleImage: "/portiko/Portiko_Brief.png",
    },
    {
      title: "Event Marketing",
      body: "A mockup event brief complete with website design, marketing materials, and insights into audience + reach.",
      image: "/udemy.png",
    },
  ];

  return (
    <>
      <div
        className={`${styles.page} justify-center text-justify text-wrap justify-items-center`}>
        <h1> PORTFOLIO </h1>
        <PortfolioCard data={data} />
      </div>
    </>
  );
}
