import { useState } from "react";
import ArtistCard from "../components/ArtistCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "./HomePage.css";

const artists = [
  {
    name: "Oasis",
    description: "Le groupe de rock britannique emblématique des années 90.",
    image: "/images/oasis.jpg",
    link: "/tour/oasis",
  },
  {
    name: "The Beatles",
    description: "Le groupe iconique de Liverpool.",
    image: "/images/thebeatles.jpg",
    link: "/tour/thebeatles",
  },
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="home-grid">
      <div className="home-header">
        <h1 className="home-title">Bienvenue sur le guide du Roustar 🎸</h1>
        <p>Choisissez un artiste et explorez ses lieux emblématiques:</p>
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="artist-grid">
        {filteredArtists.length > 0 ? filteredArtists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        )) :  (<p>Aucun artiste trouvé.</p>)} 
      </div>
    </div>
  )
}
