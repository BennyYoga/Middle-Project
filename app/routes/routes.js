const express = require("express");
const router = express.Router();

const { getVideo, getOneVideo, createVideo, deleteVideo, editVideo, getVideoByUser} = require("../controllers/videoController");
const { getProduct, createProduct, getOneProduct, editProduct, deleteProduct, getProductByVideo} = require("../controllers/productController");
const { getComment, createComment , getCommentByVideo} = require("../controllers/commentController");
const { createUser, getUser, login, verifyToken, editUser } = require("../controllers/userController");

//User Access
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.patch('/user/',verifyToken, editUser);
router.post('/login', login);

//Video Accesss
// router.get('/video/image', getVideo); 
router.get("/video", getVideo);
router.get("/video/:id", getOneVideo);
router.get("/video-user",verifyToken, getVideoByUser);
router.post("/video", verifyToken, createVideo);
router.patch("/video/edit/:id", verifyToken, editVideo);
router.delete("/video/delete/:id", verifyToken, deleteVideo);

//Product Access
router.get("/product", getProduct);
router.get("/product/:id", getOneProduct);
router.get("/product/byvideo/:id", getProductByVideo);
router.post("/product",verifyToken, createProduct);
router.patch("/product/edit/:id",verifyToken, editProduct);
router.delete("/product/delete/:id",verifyToken, deleteProduct);

//Comment Access
router.get("/comment", getComment);
router.get("/comment/byvideo/:id", getCommentByVideo);
router.post("/comment",verifyToken, createComment);

module.exports = router;
