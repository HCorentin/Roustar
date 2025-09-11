import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistCard.css";

export default function ArtistCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div
      className="artist-card"
      onClick={() => navigate(`/tour/${artist.name}`)}
    >
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h2 className="artist-name">{artist.name}</h2>
    </div>
  );
}
