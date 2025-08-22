import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenue sur le guide du Roustar 🎸</h1>
      <p>Choisissez un artiste :</p>
      <ul>
        <li>
          <Link to="/tour/oasis">Oasis</Link>
        </li>
        {/* plus tard d'autres artistes ici */}
      </ul>
    </div>
  )
}
