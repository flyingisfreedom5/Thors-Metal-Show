const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        match: /.{5,}/
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required:true},
    userName: String,
},  {
    timestamps: true
});


const bandSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    title: {type: String, required: true},
    members: {type: String, required:true},
    albumsList: String,
    comments: [commentSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Band', bandSchema)