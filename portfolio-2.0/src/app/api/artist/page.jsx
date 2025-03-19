import spotifyAuth from "../../../../controllers/spotifyAuth";

export async function fetchArtists() {
  const accessToken = await spotifyAuth();
  const artistIds = [
    "4E2rKHVDssGJm2SCDOMMJB",
    "2pAWfrd7WFF3XhVt9GooDL",
    "5VTWoYYizcOY3uIKnxeCGI",
    "3NqV2DJoAWsjl787bWaHW7",
  ];

  if (!accessToken) {
    console.error("Failed to get Spotify access token.");
    return [];
  }

  try {
    const responses = await Promise.all(
      artistIds.map((id) =>
        fetch(`https://api.spotify.com/v1/artists/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      )
    );

    const data = await Promise.all(responses.map((res) => {
      if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);
      return res.json();
    }));

    console.log("Fetched artists:", data);
    return data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return [];
  }
}
