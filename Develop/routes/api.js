const express = require('express');
const { fstat } = require('fs');
const router = express.Router();;
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const { json } = require('express');
//find the db.json file
const notesdatapath = path.join(__dirname, "../db/db.json"); 

/**
 * @returns {array}
 * **/

function retrieveNotes(){
    //collect the data from that file
    fs.readFileSync(notesdatapath, "utf-8");
}

router.get('/api/notes', (req, res) => {
    const notes = retrieveNotes();
    //return the the content as a JSON
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
  const {title, text} = req.body;
  console.log(title + text);

  const newNote = {
    id:uuid,
    title,
    text,
};
  const currentNotes = retrieveNotes();
  currentNotes.push(newNote);
  fs.writeFileSync(notesdatapath, JSON.stringify(currentNotes),"utf-8");

  res.json = newNote;

});

module.exports = router;
