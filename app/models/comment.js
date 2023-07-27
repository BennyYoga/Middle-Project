const mongoose = require("mongoose");
const uuid = require("uuid");

const CommentShema = new mongoose.Schema({
    CommentId: {
        type: String,
    },
    Comment: {
        type: String,
        required: true,
    },
    Username : {
        type: String,
        required: true,
    },
    VideoId: {
        type: String,
        required: true,
    },
    UserId : {
        type: String,
        required: true,
    },
    TimeStamp : {
        type: Date,
    }
});

CommentShema.pre("save", function (next) {
    this.TimeStamp = Date.now();
    this.CommentId = uuid.v4();
    next();
});

module.exports = mongoose.model("comments", CommentShema);