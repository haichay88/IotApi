const Static = require('../models/static.model.js');
const User = require('../models/user.model.js');
var ObjectId = require('mongodb').ObjectID;



exports.addDevice = (req, res) => {

    console.log(req.body);
    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var usr = sv[0];
                usr.devices.push.apply(usr.devices, req.body.devices);
                // add device to user
                User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        devices: usr.devices
                    }
                })
                    .then(response => {
                        res.send(response[0]);
                    });


            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};


exports.getDevice = (req, res) => {

    console.log(req.body);
    User.find(
        { "devices._id": ObjectId(req.body.deviceId) },
        { "devices.$._id": 1 }
    )
        .then(sv => {
            if (sv.length > 0) {

                res.send(sv[0].devices[0]);

            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};

exports.getDevices = (req, res) => {

    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var result = sv[0].devices;
                console.log(result);
                res.send(result);

            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};
exports.updateDevice = (req, res) => {
    console.log(req.body);

    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var usr = sv[0];
                var devices = usr.devices.filter(function (item) {
                    return item._id != req.body.device._id;
                });
                devices.push(req.body.device);

                // add device to user
                User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        devices: devices
                    }
                })
                    .then(response => {
                        res.send(response[0]);
                    });


            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};




exports.deleteAllDevice = (req, res) => {

    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var usr = sv[0];
                usr.devices = [];
                // add device to user
                User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        devices: usr.devices
                    }
                })
                    .then(response => {
                        res.send(response[0]);
                    });


            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};

exports.deleteDevice = (req, res) => {

    console.log(req.body);
    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var usr = sv[0];
                var devices = usr.devices.filter(function (item) {
                    return item._id != req.body.device._id;
                });
                //devices.push(req.body.device);

                // add device to user
                User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        devices: devices
                    }
                })
                    .then(response => {
                        res.send(response[0]);
                    });


            } else {
                res.status(404).send({
                    message: " not found"
                });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};
