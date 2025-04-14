import React from "react";
import styles from "../page.module.css";
import PortfolioCard from "../../../components/client/portfolioCard";

export const data = [
    {
      title: "Tatt2",
      subtitle: "Web Application",
      body: "A web application for tattoo artists and tattoo seekers.",
      image: "/images/tatt2Landing.png",
      techStack: "Adobe Indesign, Abobe Illustrator",
      src:"/portfolio/case/tatt2"
    },
    {
      title: "Toot Brewery Management",
      subtitle: "Web Application",
      body: "A web application for taproom managers and brewers.",
      image: "/images/tootBeerPage.png",
      techStack: "Adobe Indesign, Abobe Illustrator",
      src:"/portfolio/case/toot"
    },
    {
      title: "Portiko Technologies",
      subtitle: "Design Brief",
      body: "A portfolio showcasing logo, text, and color design for a faux company.",
      image: "/images/portikoLogoGuide.png",
      techStack: "Adobe Indesign, Abobe Illustrator",
      headerImage: "/images/portikoLogoGuide.png",
      exampleImage: "/images/portikoLogoGuide.png",
      src:"/portfolio/case/portiko"
    },
    {
      title: "Big Neighborhood",
      subtitle: "Event Marketing",
      body: "A mockup event brief complete with website design, marketing materials, and insights into audience + reach.",
      image: "/images/bigNeighborhoodLP.png",
      techStack: "Adobe Indesign, Abobe Illustrator",
      src:"/portfolio/case/bigneighorhood"
    },
  ];
    
  
  export default function Portfolio() {
    return (
      <div
        className={`${styles.page} justify-center text-justify text-wrap justify-items-center`}>
        <h1> PORTFOLIO </h1>
        <PortfolioCard data={data} />
      </div>
  
  );
}



