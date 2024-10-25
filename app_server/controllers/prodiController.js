const prodi = (req, res) => {
    res.render("prodi", {title: "Halaman Prodi", layout: "main"});
};
module.exports = {prodi};