import { connection } from "next/server";

export default async function spotifyAuth() {
  await connection(); // Ensure the connection is established
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      });
  
      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`);
      }
  
      const data = await response.json();
      return data.access_token;
  
    } catch (error) {
      console.error('Spotify Auth Error:', error);
      return null;
    }
  }
  