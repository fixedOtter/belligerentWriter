//
// made by fixedOtter on 27.7.2022
//

/* imported goods */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const {v4: uuid} = require('uuid');

/* declarations */
const db = path.join(__dirname, '../db/db.json');

/* reading from database */
const queryDataface = () => {
  // reads file from dataface database and returns the parsed json data from promise object
  return fs.promises.readFile(db, 'utf8')
  .then(data => JSON.parse(data));
}

/* gets note data on get req */
router.get('/notes', (req, res) => {
  queryDataface()
  .then(NoteData => {
    res.json(NoteData);
  })
  .catch(err => {
    console.error(err);
  });
});

/* posts to notedata on post req */
router.post('/notes', (req, res) => {
  queryDataface()
  .then(NoteData => {
    console.log(NoteData);
    // grabs userinput from req
    const inputNote = req.body;

    // creates new UUID for input note
    inputNote.id = uuid().slice(0,6);

    // pushes note to array
    NoteData.push(inputNote);

    // now writing this new note input to json dataface
    fs.promises.writeFile(db, JSON.stringify(NoteData, null, 2))
    .then(() => { 
      res.json(NoteData); 
    })
    .catch(err => {
      console.error(err);
    });
  });
});

/* deletes from notedata on delete req */
router.delete('/notes/:id', (req, res) => {
  queryDataface()
  .then(NoteData => {
    // grabbing id from URL passed to us
    let id = req.params.id;
    
    // filtering out object from array
    let NewNoteData = NoteData.filter(currItem => currItem.id != id);

    // thanks justyn!

    // now writing this new note input to json dataface
    fs.promises.writeFile(db, JSON.stringify(NewNoteData, null, 2))
    .then(() => { 
      res.json(NewNoteData); 
    })
    .catch(err => {
      console.error(err);
    });
  })
});




module.exports = router;