export default function ListeLieux({ lieux }) {
  return (
    <ul>
      {lieux.map((lieu) => (
        <li key={lieu._id}>
          <strong>{lieu.name}</strong> - {lieu.city}
        </li>
      ))}
    </ul>
  );
}
