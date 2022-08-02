const express = require('express');
const router = express.Router();
const path = require('path');
const themesController = require(path.join(__dirname, '..', 'controllers', 'themes.controller.js'));

router.get('/', themesController.getThemes);

router.get('/:id', themesController.getOneTheme);

router.post('/', themesController.postTheme);

router.delete('/:id', themesController.deleteTheme);

module.exports = router;