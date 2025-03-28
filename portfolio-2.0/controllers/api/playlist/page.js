import spotifyAuth from "../../spotifyAuth";

export default async function SpotifyPlaylist() {
  const accessToken = await spotifyAuth();
  const playlistIds = ["7wwjPnkB9SWodXajkii6xH", "7FdELWndWPJo1VbXrm5z3k", "4yoKvz8osmsqxMNPVUVTjR", "0D7ZMxhzdecAIMUPQdHobF"];

  if (!accessToken) {
    console.error("Failed to get Spotify access token.");
    return null;
  }

  try {
    // Fetch all playlists using Promise.all
    const responses = await Promise.all(
      playlistIds.map((id) =>
        fetch(`https://api.spotify.com/v1/playlists/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      )
    );

    // Check if all responses are okay
    responses.forEach((res) => {
      if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);
    });

    // Parse JSON responses
    const data = await Promise.all(responses.map((res) => res.json()));

    // Combine data if needed
    const dataConcat = data.flat();

    return dataConcat;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return null;
  }
}