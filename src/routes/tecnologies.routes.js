const express = require('express');
const router = express.Router();
const path = require('path');
const tecnologiesController = require(path.join(__dirname, '..', 'controllers', 'tecnology.controller.js'));

router.get('/', tecnologiesController.getAllTecnologies);

router.post('/', tecnologiesController.postTecnology);

router.delete('/:id', tecnologiesController.deleteTecnology);

router.put('/:id', tecnologiesController.updateTecnology);

module.exports = router;