import express from "express";
import {
  getLieux,
  getLieuById,
  createLieu,
  updateLieu,
  deleteLieu,
} from "../controllers/lieuxController.js";

const router = express.Router();

router.get("/", getLieux);
router.get("/:id", getLieuById);
router.post("/", createLieu);
router.put("/:id", updateLieu);
router.delete("/:id", deleteLieu);

export default router;
