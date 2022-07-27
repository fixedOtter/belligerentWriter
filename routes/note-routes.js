//
// made by fixedOtter on 27.7.2022
//

/* imported goods */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const {v4: uuid} = require('uuid');
const mysql = require('mysql2');

/* declarations */
const db = mysql.createPool({
  host: 'localhost',
  database: 'notes_data',
  user: 'root',
  password: 'GarfMode69420N$4'
});

const queryDataface = () => {
  db.query('SELECT * FROM notes', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

/* get listener */
router.get('/notes', (req, res) => {
  console.log(queryDataface());
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

/* post listener */
router.post('/notes', (req, res) => {
  // escape string logic with the SET ? and req.body
  db.query(`INSERT INTO notes SET ?`, req.body, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(data);
    }
  });
});

/* delete listener */
router.delete('/notes', (req, res) => {
  db.query(`DELETE FROM notes WHERE id = ${req.body.id}`, (err, data) => {
    console.log(data);
  });
});



router.get('/todos/:id', (req, res) => {
  console.log(); req.params.id
});

// queryDataface();

module.exports = router;