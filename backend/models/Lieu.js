import mongoose from "mongoose";

const LieuSchema = new mongoose.Schema({
  name: String,
  city: String,
  lat: Number,
  lng: Number,
  artist: String,
  description: String,
  image: String,
});

export default mongoose.model("Lieu", LieuSchema);
