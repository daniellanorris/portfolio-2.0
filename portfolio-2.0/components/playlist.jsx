"use client";

import { useState, useEffect } from "react";
import SpotifyPlaylist from "../src/app/api/[playlistId]/page.js";
import Image from "next/image";

export default function Playlist() {
  const [data, setData] = useState([]);
  const [face, setFace] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await SpotifyPlaylist();
        console.log("playlist data", response);
        setData(response);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);



  return (
    <>
      {data.length === 0 ? (
        <p>Loading playlist...</p>
      ) : (
        // data?.map((item) => (
        <div key={data.id}>
          <div onClick={setFace(true)}>
            <Image
              src={data.images[0].url}
              height="40"
              width="40"
              alt="Album Art"
            />
          </div>
          <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <ul className="scroll-smooth snap-mandatory snap-x">
              Tracks:
              {data.tracks?.items.map((track) => (
                <li key={track.track.id} className="snap-center">
                  {track.track.name} - {track.track.artists[0].name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        // ))
      )}
    </>
  );
}
