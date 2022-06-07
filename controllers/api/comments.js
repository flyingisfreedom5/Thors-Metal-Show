const Band = require('../models/band')

module.exports = {
    commentPost
    // delete: deleteComment,
    // update
};

export const commentPost = async (req, res)  => {
    const { id } = req.params;
    const { value } = req.body;

    const band = await Band.findById(id);

    band.comments.push(value);

    const updatedBand = await Band.findByIdAndUpdate(id, band, { new: true });
    res.status(200).json(updatedBand);
}