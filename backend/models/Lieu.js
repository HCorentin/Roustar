import mongoose from "mongoose";

const LieuSchema = new mongoose.Schema({
  nom: String,
  ville: String,
  latitude: Number,
  longitude: Number,
  description: String
});

export default mongoose.model("Lieu", LieuSchema);
