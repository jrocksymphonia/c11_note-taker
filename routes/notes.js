const notes = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');




//API Routes
// GET Route for notes db
notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//**********************
// POST Request for notes db
notes.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a review`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to add a review`);
});
//*******************************