"use client";
import Image from "next/image";
import { useState } from "react";
import X from "./x";

export default function PortfolioCard({ data }) {
  const [indexOpen, setIndexOpen] = useState(null);

  function triggerCardAction(i) {
    setIndexOpen((prev) => (prev === i ? null : i));
  }

  return (
    <div className="mt-10 relative">
      {data.length === 0 ? (
        <div className="flex animate-pulse space-x-4 w-full justify-center">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Modal Overlay */}
          {indexOpen !== null && (
            <div className="fixed flex inset-0 bg-fuchsia-800/30 backdrop-blur-lg backdrop-blur-fix justify-center z-50">
              <div className="mt-4 text-left bg-black border border-black rounded-lg w-[90vw] sm:w-[75vw] h-[75vh] relative">
                {/* <Image width='100' height='40' alt='portiko header' className='w-[100%] p-0 m-0'src={data[indexOpen]?.headerImage}/> */}
                <button
                  onClick={() => setIndexOpen(null)}
                  className=" text-white text-xl font-bold hover:cursor-pointer">
                  <X />
                </button>
                <div className="p-10 text-white">
                  <h1 className="text-lg font-semibold">
                    {data[indexOpen]?.title}
                  </h1>
                  <p>{data[indexOpen]?.body}</p>
                  <div className="flex flex-col sm:flex-row justify-between mt-4">
                    {data[indexOpen].image == null ? (
                      <> Loading</>
                    ) : (
                      <Image
                        width="300"
                        height="300"
                        alt="portiko brief example"
                        className="p-0 m-0 transition-opacity duration-500 ease-in start"
                        src={data[indexOpen]?.image}
                      />
                    )}
                    <p className="sm:float-right">
                      {" "}
                      {data[indexOpen]?.techStack}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Grid with Blur Effect */}
          <div className={`text-left sm:grid sm:grid-cols-2 transition `}>
            {data.map(({ title, body, image }, i) => (
              <div
                key={i}
                onClick={() => triggerCardAction(i)}
                className="p-4 mb-10 hover:bg-fuchsia-600 cursor-pointer">
                <h1 className="text-xl text-lxeft font-bold">{title}</h1>
                <p className="text-left">{body}</p>
                {image !== null ? (
                  <Image
                    src={image}
                    width={300}
                    height={200}
                    alt={title}
                    className="rounded-lg mt-2"
                  />
                ) : (
                  <>
                    {" "}
                    <div>Loading </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
