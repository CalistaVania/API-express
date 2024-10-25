// models/fakultas.js
// Menginspor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// Definisikan skema untuk fakultas
const fakultasSchema = new mongoose.Schema({
    // Field untuk nama fakultas
    nama : {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan di akhir string
    },
    // Field untuk singkatan fakultas
    singkatan: {
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan di akhir string
    },
    // Field untuk menyimpan tanggal pembuatan data fakultas
    createdAt: {
        type: Date, //Tipe data tanggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model Fakultas dari skema yang telah didefinisikan
const Fakultas = mongoose.model("Fakultas", fakultasSchema);

// Mengeksport model Fakultas agar dapat digunakan di file lain
module.exports = Fakultas;