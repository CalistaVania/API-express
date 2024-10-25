var express = require('express');
var router = express.Router();

// import controller
const prodiController = require('../controllers/prodiController')
//const mainController = require('../controllers/mainController')

//route 
router.get('/', prodiController.prodi)
// router.get('/about', mainController.about)
// router.get('/contact', mainController.contact)
// router.get('/', mainController.index)
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   const berita = [
//     {
//         judul: "Berita 1",
//         isi: "Isi Berita 1"
//     },
//     {
//         judul: "Berita 2",
//         isi: "Isi Berita 2"
//     },
// ];
// res.render('index', {title: 'Halaman Home', berita});
// });

module.exports = router;
