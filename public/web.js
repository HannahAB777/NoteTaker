const express = require('express');
const router = express.Router();;
const path = require('path');
//getting the landing page/html
router.get('/', (req, res) => {
    const landinghtml = path.join(__dirname, ".", "public", "index.html");
    res.sendFile(landinghtml);
});
//getting the notes page
router.get('/notes', (req, res) => {
    const noteshtml = path.join(__dirname, ".", "public", "notes.html");
    res.sendFile(noteshtml);
});
//creating an all route that sends the landing page as required in the readme
router.get('*', (req, res) => {
    const landinghtml = path.join(__dirname, ".", "public", "index.html");
    res.sendFile(landinghtml);
});



//exporting module
module.exports = router;