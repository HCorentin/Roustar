export default function ListeLieux({ lieux }) {
  return (
    <ul>
      {lieux.map((lieu) => (
        <li key={lieu._id}>
          <h3>{lieu.name}</h3>
          <p>{lieu.description}</p> 
          <img src={lieu.image} alt={lieu.name} style={{ width: '800px' }} />
        </li>
      ))}
    </ul>
  );
}
