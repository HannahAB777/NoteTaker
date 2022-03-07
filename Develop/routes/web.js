const express = require('express');
const router = express.Router();;
const path = require('path');

router.get('/', (req, res) => {
    const landinghtml = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(landinghtml);
});

router.get('/notes', (req, res) => {
    const noteshtml = path.join(__dirname, "..", "public", "notes.html");
    res.sendFile(noteshtml);
});

router.get('*', (req, res) => {
    const landinghtml = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(landinghtml);
});




module.exports = router;