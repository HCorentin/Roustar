import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div
    style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "2px",
        padding: "8px 14px",
        width: "320px",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
        margin: "20px auto",
      }}>
        <FaSearch style={{ color: "#666", marginRight: "10px" }} />
        <input
        type="text"
        placeholder="Rechercher un artiste..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          fontSize: "15px",
          backgroundColor: "transparent",
          color: "#333",
          padding: "6px 0"
        }}
        />
    </div>
    
  );
}
