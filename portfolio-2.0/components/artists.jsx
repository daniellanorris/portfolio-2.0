"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Artists() {
  const [data, setData] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        // Fetching data from the new API route
        const response = await fetch('/api/artist');
        const result = await response.json();
        console.log("artist data", result);
        setData(result);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="flex animate-pulse items-center h-[35vh] justify-center m-10">
          <div className="grid grid-cols-4 space-x-10">
            <div className="gap-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
          </div>
        </div>
      ) : (
        <div className="w-[75vw] overflow-x-scroll flex snap-mandatory max-w-6xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="group h-96 w-96 flex-shrink-0 snap-center justify-center items-center m-10 drop-shadow-whiteGlow"
            >
              <div className="relative h-[50%] w-[50%] sm:h-full sm:w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  <Image
                    src={item.images?.[0]?.url}
                    fill
                    className="object-cover rounded-xl"
                    alt="Artist Art"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-scroll items-center">
                  <h1 className="p-10">{item.name.toUpperCase()}</h1>
                  <p> Followers: {item.followers.total.toLocaleString()}</p>
                  {item.genres.length > 0 && (
                    <div>
                      <h2> Genres: </h2>
                      <p> {item.genres.join(", ")}</p>
                    </div>
                  )}
                  <button className="border border-fuchsia-600 p-2 m-10 rounded-3xl">
                    <a href={item.external_urls?.spotify}> Open in Spotify </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
