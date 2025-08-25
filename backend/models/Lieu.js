import mongoose from "mongoose";

const LieuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  artist: { type: String, required: true },
  description: String,
  image: String,
});

export default mongoose.model("Lieu", LieuSchema);
