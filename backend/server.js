import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ➡️ Route qui renvoie une liste en dur
app.get("/api/lieux", (req, res) => {
  res.json([
    { id: 1, name: "Sifters Records", city: "Manchester", lat: 53.42138112101502, lng: -2.216884375490097 },
    { id: 2, name: "Fog Lane Park", city: "Manchester", lat: 53.423908950139946, lng: -2.222333587131816 },
    { id: 3, name: "Bonehead's house", city: "Manchester", lat: 53.42496985045789, lng: -2.2438099194437364 }
  ]);
});

// ➡️ Démarrage serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
