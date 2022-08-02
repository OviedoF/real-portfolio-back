const path = require('path');
const fs = require('fs-extra');
const Tecnologies = require(path.join(__dirname, '..', 'models', 'tecnology.model.js'));
const cloudinary = require(path.join(__dirname, '..', 'config', 'cloudinary.config.js'));
const tecnologyController = {};

tecnologyController.getAllTecnologies = async (req, res) => {
    try {
        const AllTecnologies = await Tecnologies.find();
        res.status(200).send(AllTecnologies);
    } catch (error) {
        res.status(500).send(error);
    }
}

tecnologyController.postTecnology = async (req, res) => {
    try {
        const image = req.files[0];
        console.log(image)
        const upload = await cloudinary.v2.uploader.upload(image.path);
        console.log(upload);
        const url = upload.url;
        await fs.unlink(image.path);

        const body = {
            ...req.body,
            imageUrl: url
        };

        console.log(body);

        const newTecnology = new Tecnologies(body);
        await newTecnology.save();
        console.log(newTecnology)
        
        res.status(201).send(newTecnology);
    } catch (error) {
        res.status(500).send(error);
    }
}

tecnologyController.updateTecnology = async (req, res) => {
    try {
        const id = req.params.id;

        const update = await Tecnologies.findByIdAndUpdate(id, req.body);

        res.status(200).send(update);
    } catch (error) {
        res.status(500).send(error);
    }
}

tecnologyController.deleteTecnology = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Tecnologies.findByIdAndDelete(id);

        res.status(200).send(deleted);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = tecnologyController;
