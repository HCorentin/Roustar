import ArtistCard from "../components/ArtistCard.jsx";
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
  return (
    <div className="home-grid">
      <div className="home-header">
        <h1 className="home-title">Bienvenue sur le guide du Roustar 🎸</h1>
        <p>Choisissez un artiste et explorez ses lieux emblématiques:</p>
      </div>
      <div className="artist-grid">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  )
}
