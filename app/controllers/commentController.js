const Comment = require("../models/comment");
const { User } = require("../models/user");

async function getComment(req, res) {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createComment(req, res) {
  try {
    const user = await User.findOne({UserId : req.user});
    Object.assign(req.body, {UserId: req.user});
    Object.assign(req.body, {Username: user.Username});
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json("Comment created successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getCommentByVideo(req, res) {
    try {
        const comment = await Comment.find({ VideoId: req.params.id });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getComment, createComment, getCommentByVideo};
