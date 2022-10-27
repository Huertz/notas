// Dependencies
const express = require('express');
const router = express.Router();

const saveRoute = ('../db/almacen');
// Get      
router.get('/notes', (req, res) => {
    saveRoute
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
    });
  
// Post
router.post('/notes', (req, res) => {
    saveRoute
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
// Delete
router.delete('/notes/:id', (req, res) => {
    saveRoute
        .removeNote(req.params.id)
        .then(() => res.json({ok: true}))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;