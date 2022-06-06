const express = require('express');
const router = express.Router();
const bandsCtrl = require('../../controllers/api/bands');
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');

router.get('/', bandsCtrl.getAll);
//GET /bands/:id (show functionality)

// POST /bands (create functionality)
router.post('/', bandsCtrl.create);
// POST /api/photos/upload
router.post('/upload', upload.single('photo'), photosCtrl.upload);

module.exports = router