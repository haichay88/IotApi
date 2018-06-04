const Static = require('../models/static.model.js');
const User = require('../models/user.model.js');
var ObjectId = require('mongodb').ObjectID;
exports.register = (req, res) => {

    var user = new User({
        userName: req.body.userName,
        password: req.body.password,
    });

    User.find({ userName: user.userName, password: user.password })
        .then(sv => {
            if (sv.length > 0) {
                res.status(200).send({
                    message: " already existed user ! "
                });
            } else {
                user.save()
                    .then(data => {
                        res.status(200).send({
                            message: " register successfull "
                        });
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Note."
                        });
                    });
            }

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};


exports.login = (req, res) => {

    var user = new User({
        userName: req.body.userName,
        password: req.body.password,
    });
    console.log(user);
    User.find({ userName: user.userName, password: user.password })
        .then(sv => {
            if (sv.length > 0) {
                var result = {
                    userId: sv[0]._id,
                    userName: sv[0].userName
                }

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

exports.getUser = (req, res) => {
    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                var result = {
                    userId: sv[0]._id,
                    userName: sv[0].userName,
                    firstName: sv[0].firstName,
                    lastName: sv[0].lastName,
                    address: sv[0].address,
                    phone: sv[0].phone,
                    password:sv[0].password,

                }
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


exports.getAllUser = (req, res) => {
    console.log('get all')
    User.find()
        .then(sv => {
            console.log(sv);
            res.send(sv);

        }).catch(er => {
            res.status(500).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};



exports.updateUser = (req, res) => {
    console.log(req.body);

    User.find({ _id: req.body.userId })
        .then(sv => {
            if (sv.length > 0) {
                // add device to user
                User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        address: req.body.address,
                        phone: req.body.phone,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
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


exports.changePass = (req, res) => {
    console.log(req.body);

    User.find({ userName: req.body.userName ,password:req.body.password})
        .then(sv => {
            console.log(sv[0]);
            return sv;
        })
        .then(response => {
            console.log(response)
            if (response.length > 0) {
                // add device to user
                 User.updateOne({ _id: req.body.userId }, {
                    $set: {
                        password: req.body.newPass,
                    }
                })
                .then(a => {
                    res.send(a[0]);
                });
            } else {
                return res.status(404).send({
                    message: " not found"
                });
            }

        })
        .catch(er => {
            res.status(404).send({
                message: er.message || "Some error occurred while creating the Note."
            });
        });

};

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
