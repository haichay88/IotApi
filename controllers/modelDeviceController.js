const model = require('../models/modelDevice.js');

var ObjectId = require('mongodb').ObjectID;
exports.getModelDevice = (req, res) => {
console.log(req.body);
    model.find({ seriNumber: req.body.seriNumber})
        .then(sv => {
            if (sv.length > 0) {
                res.send(sv[0]);
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

exports.getModelDevices = (req, res) => {

    model.find()
        .then(sv => {
            if (sv.length > 0) {
                res.send(sv);
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


exports.addModelDevice = (req, res) => {


    model.insertMany(req.body.modelDevices)
        .then(sv => {
            if (sv.length > 0) {
                var usr = sv[0];
                res.send(sv[0]);
                
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
    User.updateOne(
        { "devices._id": ObjectId(req.body.deviceId) },
        { "$set": { "devices.$.IsOn": req.body.IsOn } })
        .then(sv => {
            console.log(sv);
            if (sv.ok == 1) {

                res.status(200).send({
                    message: " successfull"
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


exports.updateLam = (req, res) => {

    const static = new Static({
        lam1: req.body.lam1,
        lam2: req.body.lam2,
        lam3: req.body.lam3,
        lam4: req.body.lam4,
        userId: "1"
    });

    Static.find({ userId: static.userId })
        .then(sv => {
            if (sv.length > 0) {
                Static.updateOne({ userId: "1" }, {
                    $set: {
                        lam1: req.body.lam1,
                        lam2: req.body.lam2,
                        lam3: req.body.lam3,
                        lam4: req.body.lam4,
                    }
                })
                    .then(sv => {
                        res.send(static);
                    });
            } else {
                static.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Note."
                        });
                    });;
            }
        })
        .catch(er => {

        });
};