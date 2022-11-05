const router = require('express').Router();

const saveRoute = require('../db/almacen');
// Get      
router.get('/notes', function (req, res) {
    saveRoute
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
    });
  
// Post
router.post('/notes', function (req, res) {
    saveRoute
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
// Delete Bonus Points
router.delete('/notes/:id', (req, res) => {
    saveRoute
        .removeNote(req.params.id)
        .then(() => res.json({ok: true}))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;