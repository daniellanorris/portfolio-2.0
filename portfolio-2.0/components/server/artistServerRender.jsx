import SpotifyArtists from "../../controllers/api/artist/page";
import ArtistsClientRender from "../client/artistRender";
import Link from "next/link";

export default async function ArtistServerRender() {
  try {
    const artists = await SpotifyArtists();

    return (
      <div>
        <ArtistsClientRender data={artists} />
    
      </div>
    );
  } catch (error) {
    console.error("Error fetching artists:", error);
    return <p>Failed to load artists. Try and reload page. If reloading does not work, please navigate to my <Link href='/feedback' className="text-fuchsia-600 hover:cursor-pointer">contact page </Link></p>
  }
}