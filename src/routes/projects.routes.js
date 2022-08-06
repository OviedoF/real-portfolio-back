const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.controller');

router.get('/', projectsController.getAllProjects);

router.get('/type/:type', projectsController.getProjectsByType);

router.post('/', projectsController.postProject);

router.delete('/:id', projectsController.deleteProject);

router.put('/:id', projectsController.putProject);

module.exports = router;