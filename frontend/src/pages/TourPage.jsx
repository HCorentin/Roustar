import { useParams, useNavigate } from "react-router-dom"
import Carte from "../components/Carte"
import ListeLieux from "../components/ListeLieux"
import { useEffect, useState } from 'react'
import axios from "axios";
import "./TourPage.css"

export default function TourPage() {
  const { artist } = useParams();
  const navigate = useNavigate();
  const [lieux, setLieux] = useState([]);
  const [view, setView] = useState("carte"); // état pour toggler entre carte et liste
  const displayArtist = artist ? artist.charAt(0).toUpperCase() + artist.slice(1) : ''

  useEffect(() => {
    axios.get("http://localhost:5000/api/lieux")
      .then(res => {
        const artistPlaces = res.data.filter(place => place.artist.toLowerCase() === artist.toLowerCase());
        setLieux(artistPlaces);})
      .catch(err => console.error(err));
  }, [artist]);

  return (
    <div className="tour-page">
      <button onClick={() => navigate("/")}>← Retour</button>
      <h1>{displayArtist} Tour</h1>
      <button className="toggle-button" onClick={() => setView(view === "carte" ? "liste" : "carte")}>
        {view === "carte" ? "Voir la liste" : "Voir la carte"}
      </button>
      <div className="view-container">
        {view === "carte" ? (
            <Carte lieux={lieux} />
        ) : (
          <ListeLieux lieux={lieux} />
        )}
      </div>
    </div>
  )
}
