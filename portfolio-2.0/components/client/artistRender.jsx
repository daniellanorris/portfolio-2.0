"use client";

import Image from "next/image";

export default function ArtistsClientRender({ data }) {
  return (
    <>
      {!data || data.length === 0 ? (
        <div className="flex animate-pulse items-center h-[35vh] justify-center m-10">
          <div className="grid grid-cols-4 gap-10">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="size-10 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="snap-x">
        <div className="w-[100vw]  snap-center overflow-x-auto flex snap-x max-w-6xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="group h-70 w-70 sm:w-[400px] sm:h-[400px] flex-shrink-0 justify-center items-center m-10 drop-shadow-whiteGlow"
            >
              <div className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  <Image
                    src={item.images?.[0]?.url}
                    fill
                    className="object-cover rounded-xl"
                    alt="Artist Art"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-4">
                  <h1 className="text-lg font-bold">{item.name.toUpperCase()}</h1>
                  <p>Followers: {item.followers.total.toLocaleString()}</p>
                  {item.genres.length > 0 && (
                    <div>
                      <h2 className="font-semibold">Genres:</h2>
                      <p>{item.genres.join(", ")}</p>
                    </div>
                  )}
                  <a
                    href={item.external_urls?.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-fuchsia-600 px-4 py-2 mt-4 rounded-3xl hover:bg-fuchsia-600 transition"
                  >
                    Open in Spotify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

      )}
    </>
  );
}
