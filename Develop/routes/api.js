const express = require('express');
const router = express.Router();;
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const { json } = require('express');
//find the db.json file
const notesdatapath = require("../db/db.json"); 

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
  const {title, text} = req.body;
  console.log(title + text);

  const newNote = {
    id: uuid,
    title,
    text,
};
  const currentNotes = retrieveNotes();
  currentNotes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(currentNotes),"utf-8");
  res.json = newNote;

});

router.delete('api/notes/:id', (req, res) => {
  const notes = retrieveNotes();
  const idFilter = notes.filter((notes) => notes.id !== req.params.id);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(idFilter),"utf-8");

  res.json = {
    data: "ok"
  };
});

module.exports = router;
