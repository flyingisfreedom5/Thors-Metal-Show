const Band = require('../../models/band');

module.exports ={
    getAll,
    create,
    update,
}

async function getAll(req, res) {
    const bands = await Band.find({})
    res.json(bands);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const band = await Band.create(req.body);
    res.json(band);
}

async function update(req, res) {
    req.body.user = req.user._id
    const updateBand = await Band.findByIdAndUpdate(req.body)
    updateBand.save();
    res.json(band);

}