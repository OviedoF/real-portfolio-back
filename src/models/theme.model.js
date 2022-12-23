const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    color_vl: {
        type: String,
        required: true
    },
    color_l: {
        type: String,
        required: true
    },
    color_md: {
        type: String,
        required: true
    },
    color_ldark: {
        type: String,
        required: true
    },
    color_dark: {
        type: String,
        required: true
    },
    color_vdark: {
        type: String,
        required: true
    },
    text_color: {
        type: String,
        required: true
    },
    autor_image: String,
    link_image: String,
    link_gif: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('theme', themeSchema);