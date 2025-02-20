'use client';

import Playlist from '../../../components/playlist.jsx';

export default function Listening() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2> What I'm listening to </h2>
      <Playlist> </Playlist>
      
       
    </div>
  );
}
