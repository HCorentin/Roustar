import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Carte({ lieux }) {
  return (
    <MapContainer center={[53.4790, -2.2452]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lieux.map((lieu) => (
        <Marker key={lieu._id} position={[lieu.lat, lieu.lng]}>
          <Popup>
            <strong>{lieu.name}</strong><br />
            {lieu.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
