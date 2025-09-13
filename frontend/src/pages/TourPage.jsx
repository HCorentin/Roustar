import { useParams, useNavigate } from "react-router-dom"
import Carte from "../components/Carte"
import ListeLieux from "../components/ListeLieux"
import { useEffect, useState } from 'react'
import axios from "axios";

export default function TourPage() {
  const { artist } = useParams();
  const navigate = useNavigate();
  const [lieux, setLieux] = useState([]);
  const displayArtist = artist ? artist.charAt(0).toUpperCase() + artist.slice(1) : ''

  useEffect(() => {
    axios.get("http://localhost:5000/api/lieux")
      .then(res => {
        const artistPlaces = res.data.filter(place => place.artist.toLowerCase() === artist.toLowerCase());
        setLieux(artistPlaces);})
      .catch(err => console.error(err));
  }, [artist]);

  return (
    <div>
      <button onClick={() => navigate("/")}>← Retour</button>
      <h1>{displayArtist} Tour</h1>
      <div>
        <Carte lieux={lieux} />
        <ListeLieux lieux={lieux} />
      </div>
    </div>
  )
}
