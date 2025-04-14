"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerHover, setBurgerHover] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);

  };

  const handleHoverBurger = () => {
    burgerHover ? setBurgerHover(false) : setBurgerHover(true);
  };


  return (
    <>
      <header className={`navbar sticky top-0 z-50 hover:cursor-pointer`}>
        <Image
          src={burgerHover ? '/images/burger-fuchsia.svg' : '/images/burger.svg'}
          width={40}
          height={40}
          alt="burger menu"
          onClick={handleClick}
          onMouseEnter={handleHoverBurger}
          onMouseLeave={handleHoverBurger}
          className={`${isOpen ?  "z-12 rounded" : ""}`}/>
        <div className={`${isOpen ? "z-10" : "hidden"}`}>
          <div className={`flex flex-col m-2 p-8 rounded bg-white text-black ${isOpen ? "border rounded-2xl" : ""}`}>
          <Link
            href="/"
            className="btn normal-case text-xl hover:text-fuchsia-300"
            onClick={handleClick}>
              
            Home
          </Link>
          <Link
            href="/portfolio"
            className="btn btn-ghost normal-case text-xl  hover:text-fuchsia-300"
            onClick={handleClick}>
            Portfolio
          </Link>
          <Link
            href="/certifications"
            onClick={handleClick}
            className="btn normal-case text-xl  hover:text-fuchsia-300">
            Certifications
          </Link>
          <Link
            href="/listening"
            className="btn normal-case text-xl  hover:text-fuchsia-300"
            onClick={handleClick}>
            Listening
          </Link>
          <Link
            href="/feedback"
            className="btn normal-case text-xl  hover:text-fuchsia-300"
            onClick={handleClick}>
            Contact
          </Link>
          </div>
        </div>
      </header>
    </>
  );
}
