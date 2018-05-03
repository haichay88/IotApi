module.exports = (app) => {
    const notes = require('../controllers/controller.js');
    const user = require('../controllers/usercontroller.js');

    // Create a new Note
    app.post('/update', notes.updateLam);

    // Retrieve all Notes
    app.get('/data/', notes.insert);
    app.post('/data/', notes.insert);
    app.get('/static/', notes.getStatic);

    app.post('/user/Register', user.register);
    app.post('/user/login', user.login);
   
}