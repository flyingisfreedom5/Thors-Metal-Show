const Band = require('../../models/band');

module.exports = {
    create,
    update,
    delete: deleteComment
    
};

async function create(req, res) {
    const band = await Band.findOne({_id: req.body.id} )
        req.body.commentData.user = req.user._id;
        band.comments.push(req.body.commentData);
        await band.save();
        res.json(band);
}

async function update(req, res) {
    const band = await Band.findByIdAndUpdate({_id: req.body.id})
    req.body.commentData.user = req.user._id;
    const commentSubDoc = await band.comments.id(req.params.id);
    if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/bands/${band._id}`);
    commentSubDoc.text = req.body.text
    await band.save()
    res.json(band);

}   
async function deleteComment(req, res) {
    const band = await Band.findByIdAndDelete({_id: req.body.id})
    req.body.commentData.user = req.user._id;
    if (!place) return res.redirect(`/bands/${band._id}`);
    band.comments.remove(req.params.id)
    await band.save()
    res.json(band);

}   