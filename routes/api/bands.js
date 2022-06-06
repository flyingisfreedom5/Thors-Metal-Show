const express = require('express');
const router = express.Router();
const bandsCtrl = require('../../controllers/api/bands');

//GET /bands/:id (show functionality)
router.get('/:id', bandsCtrl.show);
// POST /bands (create functionality)
router.post('/', isLoggedIn, bandsCtrl.create);


module.exports = router