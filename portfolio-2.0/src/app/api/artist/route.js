
import spotifyAuth from "../../../../controllers/spotifyAuth";

export default async function handler(req, res) {
  const accessToken = await spotifyAuth();
  const artistIds = [
    "4E2rKHVDssGJm2SCDOMMJB",
    "2pAWfrd7WFF3XhVt9GooDL",
    "5VTWoYYizcOY3uIKnxeCGI",
    "3NqV2DJoAWsjl787bWaHW7",
  ];

  if (!accessToken) {
    return res.status(500).json({ error: "Failed to get Spotify access token." });
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

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching artists data", details: error.message });
  }
}