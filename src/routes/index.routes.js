const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'public', 'index.html'));
})

router.get('/cv/es', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'FEDERICO OVIEDO CV ESPAÑOL.pdf'))
})

router.get('/cv/en', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'FEDERICO OVIEDO CV INGLÉS.pdf'))
})

module.exports = router;