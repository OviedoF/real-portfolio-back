const path = require('path');
const fs = require('fs-extra');
const Projects = require(path.join(__dirname, '..', 'models', 'project.model.js'));
const cloudinary = require(path.join(__dirname, '..', 'config', 'cloudinary.config.js'));
const projectsController = {};

projectsController.getAllProjects = async (req, res) => {
    try {
        const AllProjects = await Projects.find();
        res.status(200).send(AllProjects);
    } catch (error) {
        res.status(500).send(error);
    }
}

projectsController.getProjectsByType = async(req, res) => {
    try {
        const projects = await Projects.find({type: req.params.type});

        res.status(200).send(projects)
    } catch (error) {
        res.status(500).send(error);
    }
}

projectsController.postProject = async (req, res) => {
    try {
        const urls = [];

        for (const el of req.files) {
            const result = await cloudinary.v2.uploader.upload(el.path);
            urls.push(result.secure_url);
            await fs.unlink(el.path);
        };

        const body = {
            ...req.body,
            imagesUrls: urls
        };

        const newProject = await new Projects(body);
        await newProject.save();

        console.log(newProject);

        res.status(201).send(newProject);
    } catch (error) {
        res.status(500).send(error);
    }
}

projectsController.putProject = async (req, res) => {
    try {
        const id = req.params.id;

        if (req.files) {
            const urls = [];

            for (const el of req.files) {
                const result = await cloudinary.v2.uploader.upload(el.path);
                urls.push(result.secure_url);
                await fs.unlink(el.path);
            };

            const body = {
                ...req.body,
                imagesUrls: urls
            };

            const actualizedProject = await Projects.findByIdAndUpdate(id, body);
            res.status(200).send(actualizedProject);
        } else {
            const body = {
                ...req.body
            };

            const actualizedProject = await Projects.findByIdAndUpdate(id, body);
            res.status(200).send(actualizedProject);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

projectsController.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Projects.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedProject);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = projectsController;