import express from "express";
import Lieu from "../models/Lieu.js";

const router = express.Router();

// GET tous les lieux
router.get("/", async (req, res) => {
  const lieux = await Lieu.find();
  res.json(lieux);
});

// POST nouveau lieu
router.post("/", async (req, res) => {
  const nouveauLieu = new Lieu(req.body);
  await nouveauLieu.save();
  res.json(nouveauLieu);
});

export default router;
