import "./PlaceCard.css";

export default function ListeLieux({ lieux }) {
  return (
    <div className="place-grid">
      {lieux.map((lieu) => (
        <div className="place-card" key={lieu._id}>
          <img src={lieu.image} alt={lieu.name} className="place-image"/>
          <h3 className="place-name">{lieu.name}</h3>
          <p className="place-description">{lieu.description}</p> 
        </div>
      ))}
    </div>
  );
}
