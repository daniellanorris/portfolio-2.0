import React from "react";

export default function Card({ items }) {
  return (
    <div className="snap-mandatory snap-y">
      {items.map((info, index) => (
        <div
          key={index}
          className="rounded-4xl first-child:pb-10 m-4 flex-wrap snap-start sticky top-10 bg-black">
          <div className="first-child:pb-10">
            <div className="p-0 w-full fill h-[100px] overflow-hidden rounded-t-3xl">
              {" "}
              {info[1]}
            </div>
            <h2 className="p-4">{info[0]}</h2>
            <div className="p-6">{info[2]}</div>
            <div className="pl-10 pb-10">{info[3]}</div>
          </div>
          {/* <hr className="w-[100%] justify-center justify-self-center"></hr> */}
        </div>
      ))}
    </div>
  );
}
