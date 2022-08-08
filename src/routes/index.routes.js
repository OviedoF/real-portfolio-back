const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'public', 'index.html'));
})

router.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'FEDERICO NAHUEL OVIEDO CV.pdf'))
})

module.exports = router;