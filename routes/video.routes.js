module.exports = (app) => {
    const notes = require('../controllers/controller.js');
    const user = require('../controllers/userController.js');

    // Create a new Note
    app.post('/update', notes.updateLam);

    // Retrieve all Notes
    app.get('/data/', notes.insert);
    app.post('/data/', notes.insert);
    app.get('/static/', notes.getStatic);

    app.post('/user/Register', user.register);
    app.post('/user/login', user.login);
    app.post('/user/addDevice', user.addDevice);

    app.post('/device/getDevice', user.getDevice);
    app.get('/user/getDevices', user.getDevices);
    app.post('/device/updateDevice', user.updateDevice);
   
}