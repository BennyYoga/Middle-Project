const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    ProductId : {
        type: String,
    },
    Name: {
        type: String,
        required: true,
    },
    VideoId : {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
    },
    UserId : {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    Price : {
        type: Number,
        required: true,
    },
    ImageProduct : {
        type: String,
    },
    LinkProduct : {
        type: String,
        required: true,
    },
})

ProductSchema.pre("save", function (next) {
    this.ProductId = uuid.v4();
    next();
});

module.exports = mongoose.model("products", ProductSchema);
