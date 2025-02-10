import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="navbar bg-neutral text-neutral-content">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link href="/portfolio" className="btn btn-ghost normal-case text-xl">Portfolio</Link>
        <Link href="/certifications" className="btn normal-case text-xl">Certifications</Link>
      </header>
    </>
  );
}
