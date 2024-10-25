// Mengimpor modul express untuk membuat router
const express = require("express");
// Membuat instance router dari express
const router = express.router();
// Mengimpor controller prodi untuk menangani logika bisnis
const prodiController = require("../contollers/prodiController");

// Definisi rute untuk prodi
// Mengatur rute GET untuk mendapatkan semua data prodi
router.get("/", prodiController.getAllProdi);
// Mengatur rute POST untuk membuat data prodi baru
router.get("/", prodiController.createProdi);
// Mengatur rute GET untuk mendapatkan data prodi berdasarkan ID
router.get("/:id", prodiController.getProdiById);
// Mengatur rute PUT untuk memperbarui data prodi berdasarkan ID
router.put("/:id", prodiController.updateProdi);
// Mengatur rute DELETE untuk menghapus data prodi berdasarkan ID
router.delete("/:id", prodiController.deleteProdi);

// Mengeksport router agar dapat digunakan di file lain (misalnya di app.js
module.exports = router; 