const Band = require('../../models/band');

module.exports ={
    getAll,
    create,
}

async function getAll(req, res) {
    const bands = await Band.find({
        user: req.user._id
    });
    res.json(bands);
}

async function create(req, res) {
    req.body.user =req.user._id;
    const band = await Band.create(req.body) ;
    res.json(band);
}