"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerHover, setBurgerHover] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);

  };

  const handleHoverBurger = () => {
    burgerHover ? setBurgerHover(false) : setBurgerHover(true);
  };

  const clearContext = () => {
    setIsOpen(false);
    localStorage.removeItem(isOpen);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", clearContext);
  }, []);

  return (
    <>
      <header className="navbar sticky top-0 z-50">
        <img
          src={burgerHover ? "./burger-fuchsia.svg" : "./burger.svg"}
          width={40}
          height={40}
          alt="burger menu"
          onClick={handleClick}
          onMouseEnter={handleHoverBurger}
          onMouseLeave={handleHoverBurger}
          className={`${isOpen ?  "z-12 rounded" : ""}`}></img>
        <div className={`${isOpen ? "z-10" : "hidden"}`}>
          <div className="flex flex-col m-2 border p-8 rounded border-white bg-white text-black">
          <Link
            href="/"
            className="btn normal-case text-xl hover:text-fuchsia-300">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="btn btn-ghost normal-case text-xl  hover:text-fuchsia-300">
            Portfolio
          </Link>
          <Link
            href="/certifications"
            className="btn normal-case text-xl  hover:text-fuchsia-300">
            Certifications
          </Link>
          <Link
            href="/listening"
            className="btn normal-case text-xl  hover:text-fuchsia-300">
            Listening
          </Link>
          </div>
        </div>
      </header>
    </>
  );
}
