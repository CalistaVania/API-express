// models/db.js
// Mengimpor modul mongoose untuk mengelola koneksi dengan MongoDB
const mongoose = require("mongoose");

// Fungsi asinkron untuk menghubungkan ke database MongoDB
const connectDB = async () => {
    try {
        // Menghubungkan ke MongoDB menggunakan URI koneksi
        await mongoose.connect(
            "mongodb://gabrielacalistavaniaputri2226240062:Yellowblue3@cluster0-shard-00-00.4jvxm.mongodb.net:27017,cluster0-shard-00-01.4jvxm.mongodb.net:27017,cluster0-shard-00-02.4jvxm.mongodb.net:27017/?ssl=true&replicaSet=atlas-qh50a7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

        );
        // Jika koneksi berhasil, log pesan ke konsol
        console.log("MongoDB Connected...");
    } catch (error) {
        // Jika terjadi kesalahan saat menghubungkan, log pesan kesalahan ke konsol
        console.error("MongoDB connection error:", error);
        // Keluar dari proses dengan kode status 1 untuk menandakan ada kesalahan
        process.exit(1);
    }
    
};

// Mengeksport fungsi connectDB agar dapat digunakan di file lain
module.export = connectDB;