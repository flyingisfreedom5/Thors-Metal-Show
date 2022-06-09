const express = require('express');
const router = express.Router();
const bandsCtrl = require('../../controllers/api/bands');


router.get('/', bandsCtrl.getAll);
// POST /bands (create functionality)
router.post('/', bandsCtrl.create);



module.exports = router