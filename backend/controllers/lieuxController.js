import Lieu from "../models/Lieu.js";

// GET /lieux
export const getLieux = async (req, res) => {
  try {
    const lieux = await Lieu.find();
    res.json(lieux);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET /lieux/:id
export const getLieuById = async (req, res) => {
  try { 
    const lieu = await Lieu.findById(req.params.id);
    if (!lieu) {
      return res.status(404).json({ message: "Lieu non trouvé" });
    }
    res.json(lieu);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

// POST /lieux
export const createLieu = async (req, res) => {
  try {
    const lieu = new Lieu(req.body);
    await lieu.save();
    res.status(201).json(lieu);
  } catch (error) {
    res.status(400).json({ message: "Erreur création lieu", error });
  }
};

// PUT /lieux/:id
export const updateLieu = async (req, res) => {
  try {
    const lieu = await Lieu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(lieu);
  } catch (error) {
    res.status(400).json({ message: "Erreur mise à jour", error });
  }
};

// DELETE /lieux/:id
export const deleteLieu = async (req, res) => {
  try {
    await Lieu.findByIdAndDelete(req.params.id);
    res.json({ message: "Lieu supprimé" });
  } catch (error) {
    res.status(400).json({ message: "Erreur suppression", error });
  }
};
