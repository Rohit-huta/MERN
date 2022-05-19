const express = require('express');
const notes = require("./data/notes")

const exp = express();

exp.get('/', (req, res) => {
    res.send("API is running...")
})

exp.get('/api/notes', (req, res) => {
    res.json(notes);
})

exp.get('/api/notes/:id', (req, res) => {
    const note = notes.find( (n) => n._id === req.params.id );
    res.send(note);
})




exp.listen(5000, console.log('Server started on PORT 5000'));