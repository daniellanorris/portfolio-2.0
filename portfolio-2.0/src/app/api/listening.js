import spotifyAuth from "../../../controllers/spotifyAuth";

export default async function Spotify(method) {
  const accessToken = await spotifyAuth();

  if (!accessToken) {
    console.error("Failed to get Spotify access token.");
    return null;
  }

  switch (method) {
    case 'GET':
      try {
        console.log('accessToken:', accessToken);
        const res = await fetch("https://api.spotify.com/v1/users/dmnorrisnc", {
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
        console.error("Error fetching currently playing track:", error);
        return null;
      }


  }
}
