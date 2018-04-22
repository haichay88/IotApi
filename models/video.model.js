var mongoose = require('mongoose');
var videoSchema = mongoose.Schema({
    title: String,
    titleConverted:String,
    description: String,
    videoId: String,
    imgUrl: String,
    duration: String,
    viewCount: String,
    dislikeCount: String,
    likeCount: String,
    publishDated: Date,
    tags:String,
    channelTitle:String,
    channelTitleConverted:String,
    channelId:String,
    height:String,
    width:String,
    channelInfo: {
        channelId: String,
        title: String,
        imgUrl: String
    },
    // videoRelateds:[{
    //     title:String,
    //     videoId:String,
    //     channelTitle:String,
    //     imgUrl:String,
    //     channelId:String
    // }],
   
    // comments: [{
    //     authorProfileImageUrl: String,
    //     authorDisplayName: String,
    //     textDisplay: String,
    //     replies: [{
    //         authorProfileImageUrl: String,
    //         authorDisplayName: String,
    //         textDisplay: String,
    //     }]
    // }]


});


module.exports = mongoose.model('Video', videoSchema);
