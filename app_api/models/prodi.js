const mongoose = require("mongoose"); // Mengimpor modul mongoose untuk mengelola skema dan model

const prodiSchema = new mongoose.Schema({ //Definisikan skema untuk prodi
    nama: { // Field untuk nama prodi
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    singkatan: { // Field untuk singkatan prodi
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    fakultas_id: { // Field untuk fakultas_id yang menjadi referensi ke koleksi Fakultas
        type: mongoose.Schema.Types.ObjectId, // Tipe data ObjectId untuk referensi ke Fakultas
        ref: "Fakultas", // Referensi ke model Fakultas
        required: true, // Field ini wajib diisi
    },
    // Field untuk menyimpan tanggal pembuatan data prodi
    createdAt: { 
        type: Date, // Tipe data tunggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model Prodi dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi", prodiSchema);

// Mengeksport model Prodi agar dapat digunakan di file lain
module.exports = Prodi;