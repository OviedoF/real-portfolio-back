const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imagesUrls: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tools: {
        type: Array,
        required: true
    },
    github_link: {
        type: String,
        required: true
    },
    deploy_link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description_es: {
        type: String,
        required: true
    },
    description_en: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('project', projectSchema);