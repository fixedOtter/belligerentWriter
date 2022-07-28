//
// made by fixedOtter on 27.7.2022
//

/* imported goods */
const Express = require('express');
const path = require('path');

/* api routes */
// listening for calls to effect the database
const api_routes = require('./routes/api-routes');
// just redirects user to notes.html
const note_routes = require('./routes/note-routes');

// setting app to Express so I'm not typing it a bunch
const app = Express();

// grabbing the port from online environment or setting to 6969
const PORT = process.env.PORT || 6969;

// this gives the user access to the public folder
app.use(Express.static(path.join(__dirname, 'public')));
// this lets me grab more data instead of just strings
app.use(Express.urlencoded({ extended: true }));
// this will allow us to pass json to the backend
app.use(Express.json());
// linking /api to the api routes from the file
app.use('/api', api_routes);
// linking /notes to the note routes which just redirects to notes.html
app.use('/notes', note_routes);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})