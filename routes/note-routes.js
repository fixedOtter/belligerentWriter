//
// made by fixedOtter on 27.7.2022
//

/* imported goods */
const router = require('express').Router();
const path = require('path');

/* get listener */
router.get('/', (req, res) => {
  // this is just directing the user to the notes.html page
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;