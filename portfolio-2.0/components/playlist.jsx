"use client";

import { useState, useEffect } from "react";
import SpotifyPlaylist from "../src/app/api/playlist/page.js";
import Image from "next/image";

export default function Playlist() {
  const [data, setData] = useState([]);
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('/api/playlist');
        console.log("playlist data", response);
        setData(response);
        isLoaded(true);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);


  return (
    <>
      {!loaded ? (
        <div className="h-[35vh] flex animate-pulse items-center justify-center m-10">
          <div className="grid grid-cols-4 space-x-10">
            <div className="gap-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
            <div className="gap-x-10 col-span-1 size-10 rounded-full bg-gray-200"></div>
          </div>
        </div>
      ) : (
        <div className="w-[75vw] flex overflow-x-scroll snap-x snap-mandatory max-w-6xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="group h-96 w-96 flex-shrink-0 snap-center justify-center items-center m-10">
              <div className="relative h-[50%] w-[50%] sm:h-full sm:w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 sm:h-full sm:w-full rounded-xl [backface-visibility:hidden]">
                  <Image
                    src={item.images[0].url}
                    layout="fill"
                    objectFit="cover"
                    alt="Album Art"
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-scroll">
                  <h1 className="p-10">{item.name}</h1>
                  <ul className="scroll-smooth snap-mandatory snap-x">
                    {item.tracks?.items.map((track) => (
                      <li
                        key={track.track.id}
                        className="snap-center even:bg-gray-950 odd:bg-gray-900">
                        {track.track.name} -{" "}
                        <em>{track.track.artists[0].name}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
