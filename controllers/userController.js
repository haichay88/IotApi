const Static = require('../models/static.model.js');
const User = require('../models/user.model.js');

exports.register = (req, res) => {

    var user =new User({
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

    var user =new User({
        userName: req.body.userName,
        password: req.body.password,
    });
    User.find({ userName: user.userName, password: user.password })
    .then(sv => {
        if (sv.length > 0) {
            res.status(200).send({
                message: " login successfull "
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