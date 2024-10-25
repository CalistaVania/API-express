// Mengimpor model Fakultas untuk berinteraksi dengan koleksi fakultas di MongoDB
const Fakultas = require("../models/fakultas");

// Mendapatkan semua data fakultas
const getAllFakultas = async (req, res) => {
    try {
        // Mengambil semua fakultas dari database
        const fakultas = await Fakultas.find();
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ nessage: err.message});
    }
};

// Mendapatkan satu fakultas berdasarkan ID
const getFakultasById = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found"});
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message});
    }
};

// Membuat fakultas baru
const createFakultas = async (req, res) => {
    // Mmebuat instance fakultas baru dari data yang diterima
    const fakultas = new Fakultas({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
    });

    try {
        // Menyimpan fakultas baru ke database
        const newFakultas = await fakultas.save();
        // Mengirimkan respons dengan status 201 dan data fakultas baru
        res.status(201).json(newFakultas);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message});
    }
};

// Memperbarui data Fakultas
const updateFakultas = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found"});

        // Memperbarui nama fakultas jika ada di request body
        if (req.body.nama != null) {
            fakultas.nama = req.body.nama;
        }

        // Memperbarui singkatan fakultas jika ada di request body
        if (req.body.singkatan != null) {
            fakultas.singkatan = req.body.singkatan;
        }

        // Menyimpan perubahan ke database
        const updateFakultas = await fakultas.save();
        // Mengirimkan respons dengan status 200 dan data fakultas yang diperbarui
        res.status(200).json(updateFakultas);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat memperbarui
        res.status(400).json({ message: err.message });
    }
};

// Menghapus fakultas berdasarkan ID
const deleteFakultas = async (req, res) => {
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found" });

        // Menghapus fakultas dari database
        await fakultas.deleteOne();
        // Mengirimkan respon dengan status 200 dan pesan penghapusan
        res.status(200).json({ message: "Fakultas deleted" });
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

// Mengeksport fungsi-fungsi kontroler agar dapat digunakan di file lain
module.exports = {
    getAllFakultas,
    createFakultas,
    getFakultasById, 
    updateFakultas,
    deleteFakultas,
};