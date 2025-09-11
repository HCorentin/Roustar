import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Carte.css";
import { useEffect } from "react";

// Composant pour forcer le recalcul de la taille
function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

export default function Carte({ lieux }) {
  return (
    <MapContainer center={[53.4790, -2.2452]} zoom={11} className="tour-map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lieux.map((lieu) => (
        <Marker key={lieu._id} position={[lieu.lat, lieu.lng]}>
          <Popup>
            <strong>{lieu.name}</strong><br />
            {lieu.city}
          </Popup>
        </Marker>
      ))}
      <ResizeHandler />
    </MapContainer>
  );
}
