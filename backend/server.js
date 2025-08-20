import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ➡️ Route qui renvoie une liste en dur
app.get("/api/lieux", (req, res) => {
  res.json([
    { id: 1, name: "Abbey Road Studios", city: "London", lat: 51.5321, lng: -0.1775 },
    { id: 2, name: "Parc de Sceaux", city: "Paris", lat: 48.7768, lng: 2.3130 },
    { id: 3, name: "Central Park", city: "New York", lat: 40.7851, lng: -73.9683 }
  ]);
});

// ➡️ Démarrage serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
