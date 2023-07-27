const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const secretKey = process.env.secretKey;
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");


//Function Auth
function generateAccessToken(dataUser) {
  return jwt.sign(dataUser, secretKey, { expiresIn: "1h" });
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (typeof token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Unauthorized" });
      } else {
        req.user = decoded.UserId;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
}

async function login(req, res) {
  const { Username, Password } = req.body;
  const IdUser = await User.find({ Username, Password });
  if (IdUser.length > 0) {
    console.log(IdUser);
    var UserId = IdUser[0].UserId;
    const token = generateAccessToken({ UserId });
    res.setHeader("Authorization", `${token}`);
    res.status(200).json({ Token: token, UserId: UserId });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
}

//Function User
async function getUser(req, res) {
  try {
    const user = await User.find({ UserId: req.params.id });
    res.status(200).json({
      UserId: user[0].UserId,
      Username: user[0].Username,
      Picture: user[0].Picture,
      Email: user[0].Email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createUser(req, res) {
  try {
    const UniquieId = uuid.v4();
    if (req.files) {
      const { Picture } = req.files;

      let directory = `${__dirname}/../assets/${UniquieId}`;
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      }

      pathCover = `${directory}/${Picture.name}`;
      pathCover = path.resolve(__dirname, pathCover);
      Picture.mv(pathCover);
      req.body.Picture = pathCover;
    }
    Object.assign(req.body, { UserId: UniquieId });

    const user = new User(req.body);
    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function editUser(req, res) {
  try {
    const user = req.body;
    const option = { new: true };

    if (req.files) {
      const { Picture } = req.files;
      const newImage = await User.findOne({ UserId: req.user });

      if (!newImage) res.status(404).json({ message: "User not found" });

      if (newImage.Picture != null) {
        fs.unlinkSync(newImage.Picture);
      }

      let directory = `${__dirname}/../assets/${req.user}`;
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      }

      pathCover = `${__dirname}/../assets/${req.user}/${Picture.name}`;
      pathCover = path.resolve(__dirname, pathCover);
      req.body.Picture = pathCover;

      Picture.mv(pathCover);
    }

    const result = await User.findOneAndUpdate({ UserId: req.user }, user, option);
    res.status(201).json("User edited successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  generateAccessToken,
  verifyToken,
  login,
  getUser,
  createUser,
  login,
  editUser,
};
