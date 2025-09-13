import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Carte.css";
import { useEffect } from "react";

function AutoCenterMap({ lieux }) {
  const map = useMap();

  useEffect(() => {
    if (!lieux || lieux.length === 0) return;

    map.invalidateSize(); // recalcul de la taille, évite les bugs d'affichage
    const bounds = lieux.map(l => [l.lat, l.lng]);
    map.fitBounds(bounds, { padding: [50, 50] }); // ajuste automatiquement la vue pour inclure tous les marqueurs
  }, [map, lieux]);

  return null;
}

export default function Carte({ lieux }) {
  return (
    <MapContainer center={[53.4790, -2.2452]} zoom={11} className="tour-map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lieux?.map((lieu) => (
        <Marker key={lieu._id} position={[lieu.lat, lieu.lng]}>
          <Popup maxWidth={300}>
            <img src={lieu.image} alt={lieu.name} className="place-image-popup"/>
            <strong>{lieu.name}</strong><br />
            <p>{lieu.description}</p> 
            {lieu.city}
          </Popup>
        </Marker>
      ))}
      <AutoCenterMap lieux={lieux} />
    </MapContainer>
  );
}
