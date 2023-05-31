const express = require('express');
const path = require('path');
const db = require('./db/db.json')

const PORT = process.env.PORT || 3001;

const app = express();

//express middlewareeeee
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware that connects front-end files
app.use(express.static('public'));


//HTML Routes
// GET Route for startup page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
); 

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);