import Kursus from "../models/kursusmodel.js";

// [GET] Semua Kursus
export const getKursus = async (req, res) => {
  try {
    const response = await Kursus.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error("Get Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

// [GET] Kursus by ID
export const getKursusById = async (req, res) => {
  try {
    const kursus = await Kursus.findByPk(req.params.id);
    if (!kursus) {
      return res.status(404).json({ message: "Kursus tidak ditemukan" });
    }
    res.json(kursus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [POST] Buat Kursus Baru (Img berupa URL)
export const createKursus = async (req, res) => {
  try {
    const { Judul, Guru, Waktu, harga, Deskripsi, Kategori, Img } = req.body;

    if (!Judul || !Guru || !Waktu || !harga || !Kategori) {
      return res.status(400).json({ message: "Field wajib tidak boleh kosong" });
    }

    const kursus = await Kursus.create({
      Judul,
      Guru,
      Waktu,
      harga,
      Img, // URL gambar langsung
      Deskripsi,
      Kategori,
    });

    res.status(201).json({ message: "Kursus berhasil ditambahkan", kursus });
  } catch (err) {
    res.status(500).json({ message: "Gagal menambahkan kursus", error: err.message });
  }
};

// [PUT] Update Kursus
export const updateKursus = async (req, res) => {
  try {
    const id = req.params.id;
    const kursus = await Kursus.findByPk(id);
    if (!kursus) {
      return res.status(404).json({ msg: "Kursus not found" });
    }

    await kursus.update(req.body);
    res.status(200).json({ msg: "Kursus updated successfully" });
  } catch (error) {
    console.error("Update Error:", error.message);
    res.status(400).json({ error: "Failed to update kursus" });
  }
};

// [DELETE] Hapus Kursus
export const deleteKursus = async (req, res) => {
  try {
    const id = req.params.id;
    const kursus = await Kursus.findByPk(id);
    if (!kursus) {
      return res.status(404).json({ msg: "Kursus not found" });
    }

    await kursus.destroy();
    res.status(200).json({ msg: "Kursus deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error.message);
    res.status(400).json({ error: "Failed to delete kursus" });
  }
};