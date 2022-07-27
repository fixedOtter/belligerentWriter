//
// made by fixedOtter on 27.7.2022
//

/* imported goods */
const Express = require('express');
const path = require('path');

/* note routes */
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
app.use('/', note_routes);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})