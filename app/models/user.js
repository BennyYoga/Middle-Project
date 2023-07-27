const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    UserId : {
        type: String,
    },
    Username: {
        type: String,
        required: true,
    },
    Password : {
        type: String,
        required: true,
    },
    Picture : {
        type: String,
    },
    Email : {
        type: String,
        required: true,
    },
})


exports.User = mongoose.model("users", UserSchema);