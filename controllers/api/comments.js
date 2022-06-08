const Band = require('../models/band')

module.exports = {
    create
    // delete: deleteComment,
    // update
};

async function create(req, res) {
    Band.findOne({'comments._id': req.params.id, 'comments.userId' : req.user._id},
    const comment = await Comment.create(req.body) ;
    comment.save();
    res.json(comment);