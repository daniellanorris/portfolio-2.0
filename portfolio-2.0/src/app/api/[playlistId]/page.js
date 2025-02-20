import spotifyAuth from "../../../../controllers/spotifyAuth";

export default async function SpotifyPlaylist(playlistids) {
  const accessToken = await spotifyAuth();

  if (!accessToken) {
    console.error("Failed to get Spotify access token.");
    return null;
  }

  try {
        const res = await fetch(`https://api.spotify.com/v1/playlists/7FdELWndWPJo1VbXrm5z3k`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);

        const data = await res.json();
        console.log('okay response', data)
        return data;


      } catch (error) {
        console.error("Error fetching currently fetching playlist:", error);
        return null;
      }

 
  
}
