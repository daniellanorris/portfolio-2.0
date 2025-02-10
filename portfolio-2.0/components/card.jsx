import React from "react";
import Image from "next/image";


export default function Card({ items }) {
    return (
        <div className="card">
            {items.map((info, index) => (
                <div key={index}>
                    <div> {info[1]}</div>
                    <h2>{info[0]}</h2>
                    <p>{info[2]}</p>
                    <p>{info[3]}</p>
                </div>
            ))}
        </div>
    );
}