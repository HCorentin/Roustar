import mongoose from 'mongoose';
import 'dotenv/config';
import Lieu from './models/Lieu.js';

// Connecte MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur MongoDB :", err));

const lieux = [
  { name: "Sifters Records", city: "Manchester", lat: 53.42138112101502, lng: -2.216884375490097, artist: "Oasis" },
    { name: "Fog Lane Park", city: "Manchester", lat: 53.423908950139946, lng: -2.222333587131816, artist: "Oasis" },
    { name: "Bonehead's house", city: "Manchester", lat: 53.42496985045789, lng: -2.2438099194437364, artist: "Oasis" },
];

async function seedDB() {
  try {
    await Lieu.deleteMany({ artist: "Oasis" });
    await Lieu.insertMany(lieux);
    console.log("✅ Lieux Oasis insérés !");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

seedDB();
