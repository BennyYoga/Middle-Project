const mongoose = require("mongoose");
const { User } = require("./user");
const uuid = require("uuid");

const VideoSchema = new mongoose.Schema({
    VideoId : {
        type: String,
    },
    UserId : {
        type: String,
        ref: User,
    },
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    ImageThumbnail : {
        type: String,
    },
    VideoEmbeded : {
        type: String,
        required: true,
    },
    TimeStamp : {
        type: Date,
    },
})

VideoSchema.pre("save", function (next) {
    this.TimeStamp = Date.now();
    this.VideoId = uuid.v4();
    next();
});

module.exports = mongoose.model("videos", VideoSchema);