import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import 'dotenv/config';
import Lieu from "./models/Lieu.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur MongoDB :", err));

app.get("/api/lieux", async (req, res) => {
  try {
    const lieux = await Lieu.find({ artist: "Oasis" });
    res.json(lieux);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ➡️ Démarrage serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
