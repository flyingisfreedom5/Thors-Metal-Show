const Band = require('../../models/band');

module.exports = {
    create,
    delete: deleteComment
    
};

async function create(req, res) {
    const band = await Band.findOne({_id: req.body.id} )
        req.body.commentData.user = req.user._id;
        req.body.commentData.userName = req.user.name;
        band.comments.push(req.body.commentData);
        await band.save();
        res.json(band);
}


async function deleteComment(req, res) {
    console.log(req.body);
    const band = await Band.findOne({'comments._id': req.params.id})
    band.comments.remove(req.params.id)
    await band.save()
    console.log(band);
    res.json(band);

}   