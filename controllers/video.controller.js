const Video = require('../models/video.model.js');


// Create and Save a new Note
exports.create = (req, res) => {
   
   
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // create a channel
    const video = new Video({
        title: req.body.video.title || "Untitled Note",
        description: req.body.video.description,
        videoId: req.body.video.videoId,
        imgUrl: req.body.video.imgUrl,
        duration: req.body.video.duration,
        viewCount: req.body.video.viewCount,
        dislikeCount: req.body.video.dislikeCount,
        likeCount: req.body.video.likeCount,
        publishDated: req.body.video.publishDated,
        //channelInfo: req.body.video.channelInfo,
        titleConverted:req.body.video.titleConverted,
        channelId:req.body.video.channelId,
        channelTitle:req.body.video.channelTitle,
        channelTitleConverted:req.body.video.channelTitleConverted,
        tags:req.body.video.tags,
        height:req.body.video.height,
        width:req.body.video.width,
    });

    Video.find({ videoId: req.body.video.videoId })
        .then(note => {
           
            if (note.length<=0) {
                console.log(note);
                // Save Note in the database
                video.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Note."
                        });
                    });

            }
            else {
                // // Find note and update it with the request body
                // Note.findByIdAndUpdate({ videoId: req.params.videoId }, {
                //     title: req.body.title || "Untitled Note",
                //     content: req.body.content
                // }, { new: true })
                //     .then(note => {
                //         if (!note) {
                //             return res.status(404).send({
                //                 message: "Note not found with id " + req.params.noteId
                //             });
                //         }
                //         res.send(note);
                //     }).catch(err => {
                //         if (err.kind === 'ObjectId') {
                //             return res.status(404).send({
                //                 message: "Note not found with id " + req.params.noteId
                //             });
                //         }
                //         return res.status(500).send({
                //             message: "Error updating note with id " + req.params.noteId
                //         });
                //     });
                res.send(note);
            }
            
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Error retrieving video with id " + req.params.videoId
            });
        });



};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Video.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Video.find({ videoId: req.params.videoId })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            res.send(note[0]);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Error retrieving video with id " + req.params.videoId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
   
    Video.deleteMany({ videoId: req.params.videoId })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            res.send({ message: "video deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Could not delete video with id " + req.params.videoId
            });
        });
};

// count record of collection
exports.count = (req, res) => {
    
    Video.count()
        .then(note => {
            console.log(note);
            return res.status(200).send({
                message: "Total record " + note
            }); 
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Could not delete video with id " + req.params.videoId
            });
        });
};