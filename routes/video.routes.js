module.exports = (app) => {
    const notes = require('../controllers/video.controller.js');

    // Create a new Note
    app.post('/video', notes.create);

    // Retrieve all Notes
    app.get('/videos', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/video/:videoId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:videoId', notes.delete);
    // count a video record
    app.get('/count', notes.count);
}