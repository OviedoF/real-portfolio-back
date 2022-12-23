const path = require('path');
const fs = require('fs-extra');
const Themes = require(path.join(__dirname, '..', 'models', 'theme.model.js'));
const cloudinary = require(path.join(__dirname, '..', 'config', 'cloudinary.config.js'));

const themesController = {};

themesController.getThemes = async (req, res) => {
    try {
        const themesFinded = await Themes.find();

        res.status(200).send(themesFinded);
    } catch (error) {
        res.status(500).send(error);
    }
}

themesController.getOneTheme = async (req, res) => {
    try {
        const id = req.params.id;
        const themeFinded = await Themes.findById(id);
        
        res.status(200).send(themeFinded);
    } catch (error) {
        res.status(500).send(error);
    }
}

themesController.postTheme = async (req, res) => {
    try {
        const image = req.files[0];
        const upload = await cloudinary.v2.uploader.upload(image.path);
        const url = upload.url;
        await fs.unlink(image.path);

        const body = {
            ...req.body,
            imageUrl: url
        };

        console.log(body);

        const newTheme = new Themes(body);
        await newTheme.save();
        
        res.status(201).send(newTheme);
    } catch (error) {
        res.status(500).send(error);
    }
}

themesController.deleteTheme = async (req, res) => {
    try {
        const {id} = req.params;
        await Themes.findByIdAndDelete(id);

        res.status(201).send('delete ;)');
    } catch (error) {
        res.status(500).send(error);
    }
}

themesController.updateTheme = async (req, res) => {
    try {
        const id = req.params.id;

        const updateTheme = await Themes.findByIdAndUpdate(id, req.body);

        res.status(200).send(updateTheme)
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = themesController;