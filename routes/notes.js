const notes = require('express').Router();

//require a unique id for each new note
const { v4: uuidv4 } = require('uuid'); 

const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');




//API Routes
// GET Route for retrieving all notes db
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//**********************
// POST Request for notes db
notes.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    const { title, text } = req.body;

    if (title && text) {
        // Variable for the object we will save
        const newNote = {
          title,
          text,
          note_id: uuidv4(),
        };
    
        readAndAppend(newNote, './db/db.json');
    
        const response = {
          status: 'success',
          body: newNote,
        };
    
        res.json(response);
      } else {
        res.json('Error in posting note');
      }
});
//*******************************

module.exports = notes;