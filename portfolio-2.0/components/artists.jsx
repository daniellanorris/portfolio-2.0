"use client";

import { useState, useEffect } from "react";
import SpotifyArtists from "../src/app/api/artist/page.jsx";
import Image from "next/image";

export default function Artists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await SpotifyArtists();
        console.log("artist data", response);
        setData(response);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <>

        <div className="w-[75vw] overflow-x-scroll flex snap-mandatory max-w-6xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="group h-96 w-96 flex-shrink-0 snap-center justify-center items-center m-10  drop-shadow-whiteGlow"
            >
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  <Image
                    src={item.images[0].url}
                    fill
                    className="object-cover rounded-xl"
                    alt="Artist Art"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-scroll">
                  <h1 className="p-10">{item.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
