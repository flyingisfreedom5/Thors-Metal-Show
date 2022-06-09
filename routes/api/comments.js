const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


// POST /bands/:id/comments
router.post('/', commentsCtrl.create);
// DELETE /comments/:id
router.delete('/:id', commentsCtrl.delete);
// PUT /comments/:id'
router.put('/:id', commentsCtrl.update);


module.exports = router