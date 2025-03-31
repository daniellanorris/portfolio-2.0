"use client";

import ArtistServerRender from "../../../components/server/artistServerRender.jsx";
import ArtistsClientRender from "../../../components/client/artistRender.jsx";
import Image from "next/image.js";

export default function Listening() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-10 m-10"> WHAT I'M LISTENING TO </h1>
          <p className="pb-10 w-[75%] justify-self-center">
            {" "}
            Scroll within the below elements to discover what I'm listening to!
            Data is imported using Spotify's API and a general authorization
            token. Always team Spotify over Apple music...{" "}
          </p>
          <div className="flex">
            <h2 className="justify-left px-2">ARTISTS</h2>
            <Image src="/recordPlayer.svg" width="30" height="30" />
          </div>
          <hr className="w-[40%] mt-5"></hr>
          <ArtistsClientRender>
            <ArtistServerRender />
          </ArtistsClientRender>
          <div className="flex">
            <p className="justify-self-start px-2">PLAYLISTS</p>
            <Image src="/recordPlayer.svg" width="30" height="30" />
          </div>
          <hr className="w-[40%] mt-5"></hr>
          {/* <Playlist></Playlist> */}
        </div>
      </div>
    </>
  );
}
