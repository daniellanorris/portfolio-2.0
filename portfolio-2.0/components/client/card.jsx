import React from "react";

export default function Card({ items }) {
  return (
    <div>
      {items.map((info, index) => (
  
          <div key={index} className="rounded-2xl pb-10 m-6 flex-wrap">
            <div className="pb-10">
            <div className="p-0 w-full fill h-[200px] overflow-hidden rounded-t-4xl"> {info[1]}</div>
            <h2 className="p-4">{info[0]}</h2>
            <div className="p-6">{info[2]}</div>
            <div className="p-4">{info[3]}</div>
            </div>
            <hr className="w-[100%] justify-center justify-self-center"></hr>
          </div>

   
      ))}
    </div>
  );
}
