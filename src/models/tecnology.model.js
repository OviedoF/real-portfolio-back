const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnologySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: Array,
        required: true
    },
    description: String,
    documentation_link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('tecnology', tecnologySchema);