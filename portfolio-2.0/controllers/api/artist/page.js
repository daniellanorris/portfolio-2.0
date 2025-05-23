import spotifyAuth from "../../spotifyAuth";

export default async function SpotifyArtists() {
  const accessToken = await spotifyAuth();
  const artistIds = ["4E2rKHVDssGJm2SCDOMMJB", "2pAWfrd7WFF3XhVt9GooDL", "5VTWoYYizcOY3uIKnxeCGI", "3NqV2DJoAWsjl787bWaHW7", "3BJX1nYizKvWpZTY5HOAr4", "60df5JBRRPcnSpsIMxxwQm", "56ZTgzPBDge0OvCGgMO3OY", "1tho5dJnzdYD57EQkM3SmK", "45yEuthJ9yq1rNXAOpBnqM"];

  if (!accessToken) {
    console.error("Failed to get Spotify access token.");
    return null;
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
  

    // Check if all responses are okay
    responses.forEach((res) => {
      if (!res.ok) {
        throw new Error(`Spotify API error: ${res.status}`)

      }

    });

    // Parse JSON responses
    const data = await Promise.all(responses.map((res) => res.json()));


    // Combine data if needed
    const dataConcat = data.flat();

    return dataConcat;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return null;
  }
}