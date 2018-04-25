module.exports = (app) => {
    const notes = require('../controllers/controller.js');

    // Create a new Note
    app.post('/update', notes.updateLam);

    // Retrieve all Notes
    app.get('/data/', notes.insert);
    app.post('/data/', notes.insert);

   
}