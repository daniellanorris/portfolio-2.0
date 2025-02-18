import React from "react";
import "../src/app/globals.css";

export default function Card({ items }) {
    return (
      <div>
        {items.map((info, index) => (
          <div
            key={index}
            className="border border-white-10 rounded-2xl p-4 m-6 flex-wrap hover:outline-2">
              <div className="p-6"> {info[1]}</div>
              <h1 className="p-4">{info[0]}</h1>
              <div className="p-6">{info[2]}</div>
              <div className="p-4">{info[3]}</div>
          </div>
        ))}
      </div>
    );
  }