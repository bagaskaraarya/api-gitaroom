// routes/IkutKursusRoute.js
import express from "express";
import {
  getKursusDiikuti,
  daftarKursus,
  batalIkut,
  updateIkutKursus,
  getAllIkutKursus,
} from "../controllers/ikutkursuscontroller.js";
const router = express.Router();

// routes/IkutKursusRoute.js
router.get("/ikutkursus", getAllIkutKursus);
// GET semua kursus yang diikuti oleh user tertentu
router.get("/ikutkursus/:userId", getKursusDiikuti);

// POST daftar kursus baru
router.post("/ikutkursus", daftarKursus);

// DELETE batal ikut kursus
router.delete("/ikutkursus/:id", batalIkut);
router.put("/ikutkursus/:id", updateIkutKursus);
export default router;