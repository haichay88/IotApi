const Static = require('../models/static.model.js');
const History = require('../models/history.model.js');

exports.insert = (req, res) => {

    console.log(req.body);

    Static.find({ userId: "1" })
        .then(sv => {

            res.send(sv[0].lam1 + sv[0].lam2);


        }).catch(er => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};


exports.updateLam = (req, res) => {

    const static = new Static({
        lam1: req.body.lam1,
        lam2: req.body.lam2,
        userId: "1"
    });

    Static.find({ userId: static.userId })
        .then(sv => {
            if (sv.length > 0) {
                Static.updateOne({ userId: "1" }, { $set: { lam1: req.body.lam1, lam2: req.body.lam2 } })
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