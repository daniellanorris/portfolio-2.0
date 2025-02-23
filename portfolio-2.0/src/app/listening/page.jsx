"use client";

import Playlist from "../../../components/playlist.jsx";
import Artists from "../../../components/artists.jsx";
import Image from "next/image.js";

export default function Listening() {

  const [data, setData] = useState([]);


  return (
    <>

          {data.length === 0 ? (
            <div>
            <svg
              className="mr-3 size-5 animate-spin fill-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
              ></path>
            </svg>
            </div>
          ) : (
            <div>
    <div className="flex flex-col items-center justify-center">
      <h1 className="pb-10"> WHAT I'M LISTENING TO </h1>
      <p className="pb-10 w-[75%] justify-self-center">
        {" "}
        Scroll within the below elements to discover what I'm listening to! Data is imported using Spotify's API and a general authorization token. Always team Spotify over Apple music... {" "}
      </p>
      <div className="flex">
        <h2 className="justify-left px-2">Artists</h2>
        <Image src="/recordPlayer.svg" width="30" height="30" />
      </div>
      
      <Artists> </Artists>
      <div className="flex">
        <p className="justify-self-start px-2">Playlists</p>
        <Image src="/recordPlayer.svg" width="30" height="30" />
      </div>

      <Playlist></Playlist>
      </div>
            </div>
          )}  
   </>
)


}
  