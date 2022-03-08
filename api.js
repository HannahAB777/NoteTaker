const express = require('express');
const router = express.Router();;
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const { json } = require('express');
//find the db.json file
const notesdatapath = require("./db/db.json"); 

/**
 * @returns {array}
 * **/

function retrieveNotes(){
    //collect the data from that file
    return notesdatapath || "";
}

router.get('/api/notes', (req, res) => {
    const notes = retrieveNotes();
    //return the the content as a JSON
    res.json(notes);
});


router.post('/api/notes', (req, res) => {
  //deconstructing the request and pulling title and text
  const {title, text} = req.body;
  console.log(title + text);
  //creating a new note with the use of 'uuid' for a unique idenitfier
  const newNote = {
    id: uuid.v4(),
    title,
    text,
};
//pushing the new note to the database and saving the database
  const currentNotes = retrieveNotes();
  currentNotes.push(newNote);
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(currentNotes),"utf-8");
  res.json(newNote);

});
//deleting a note by retrieving its id and filtering out of the notes and resaving them without it
router.delete('/api/notes/:id', (req, res) => {
  const notes = retrieveNotes();
  const idFilter = notes.filter((notes) => notes.id !== req.params.id);
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(idFilter),"utf-8");

  res.json({
    "data": "ok"}
);
});

module.exports = router;
