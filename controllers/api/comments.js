const Band = require('../../models/band');

module.exports = {
    create
    
};

async function create(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    const band = await Band.findOne({_id: req.body.id} )
        req.body.commentData.user = req.user._id;
        band.comments.push(req.body.commentData);
        band.save();
    
    res.json(band);
}