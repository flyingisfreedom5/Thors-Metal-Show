const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


// POST /bands/:id/comments
router.post('/:id/comments', commentsCtrl.create);
