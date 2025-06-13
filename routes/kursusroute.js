import express from "express";
import {
  getKursus,
  createKursus,
  updateKursus,
  getKursusById,
  deleteKursus
} from "../controllers/kursuscontroller.js";

const router = express.Router();

// GET semua kursus
router.get("/courses", getKursus);

// POST buat kursus baru (Img berupa URL, tanpa multer)
router.post("/courses", createKursus);

// GET satu kursus by id
router.get("/courses/:id", getKursusById);

// PUT update kursus
router.put("/courses/:id", updateKursus);

// DELETE kursus
router.delete("/courses/:id", deleteKursus);

export default router;