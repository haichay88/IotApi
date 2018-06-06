module.exports = (app) => {
    const device = require('../controllers/deviceController.js');
    const user = require('../controllers/userController.js');
    const modelCtl = require('../controllers/modelDeviceController.js');

    

    app.post('/user/Register', user.register);
    app.post('/user/login', user.login);
    app.post('/user/updateUser', user.updateUser);
    app.post('/user/changePass', user.changePass);
    app.get('/user/getUser', user.getUser);
    app.get('/user/getAllUser', user.getAllUser);

    app.post('/user/addDevice', device.addDevice);
    app.get('/user/getDevices', device.getDevices);
    app.post('/device/getDevice', device.getDevice);  
    app.post('/device/updateDevice', device.updateDevice);
    app.post('/device/deleteAllDevice', device.deleteAllDevice);
    app.post('/device/deleteDevice', device.deleteDevice);


    app.post('/model/addModelDevice', modelCtl.addModelDevice);
    app.post('/model/getModelDevice', modelCtl.getModelDevice);
    app.get('/model/getModelDevices', modelCtl.getModelDevices);
    app.post('/model/deleteModel', modelCtl.deleteModel);
}
