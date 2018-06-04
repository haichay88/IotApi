module.exports = (app) => {
    const notes = require('../controllers/controller.js');
    const user = require('../controllers/userController.js');
    const modelCtl = require('../controllers/modelDeviceController.js');

    // Create a new Note
    app.post('/update', notes.updateLam);

    // Retrieve all Notes
    

    app.post('/user/Register', user.register);
    app.post('/user/login', user.login);
    app.post('/user/updateUser', user.updateUser);
    app.post('/user/changePass', user.changePass);
    app.get('/user/getUser', user.getUser);
    app.get('/user/getAllUser', user.getAllUser);
    app.post('/user/addDevice', user.addDevice);
    app.get('/user/getDevices', user.getDevices);

    app.post('/device/getDevice', user.getDevice);
    
    app.post('/device/updateDevice', user.updateDevice);
    app.post('/device/deleteAllDevice', user.deleteAllDevice);
    app.post('/device/deleteDevice', user.deleteDevice);


    app.post('/model/addModelDevice', modelCtl.addModelDevice);
    app.post('/model/getModelDevice', modelCtl.getModelDevice);
    app.get('/model/getModelDevices', modelCtl.getModelDevices);
    app.post('/model/deleteModel', modelCtl.deleteModel);
}
