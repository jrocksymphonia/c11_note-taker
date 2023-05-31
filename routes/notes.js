




//API Routes
// GET Route for notes db
app.get('/api/notes', (req, res) => res.json(db));

//**********************
// POST Request for notes db
app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a review`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to add a review`);
});
//*******************************