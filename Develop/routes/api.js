const express = require('express');
const { fstat } = require('fs');
const router = express.Router();;
const path = require('path');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    //find the db.json file
    const notesdatapath = path.join(__dirname, "..", "db", "db.json"); 
    //collect the data from that file
    const notesdata = JSON.parse(fs.readFileSync(notesdatapath, "utf-8")|| "");
    //return the the content as a JSON
    res.JSON(notesdata);
});

module.exports = router;
