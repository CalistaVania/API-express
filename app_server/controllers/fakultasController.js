// Mengimpor axios untuk melakukan HTTP request
const axios = require("axios");

const index = async (req, res) => {
    try {
        // Mendapatkan data fakultas dari API eksternal
        const response = await axios.get(
            "http://crud-express-seven.vercel.app/api/fakultas"
        );

        // Data fakultas dari API
        const fakultas = response.data;

        // Render halaman 'fakultas' dengan data yang diperoleh dari API
        res.render("fakultas", {
            title: "halaman Fakultas",
            fakultas,
            layout: "main",
        });
    } catch (error) {
        // Jika terjadi kesalahan saat mengambil data dari API 
        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data fakultas dari API");
    }
};

module.exports = { index };