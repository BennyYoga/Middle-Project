const Product = require("../models/product");
const path = require('path');
const fs = require("fs");

async function getProduct(req, res) {
  try {
    const prodct = await Product.find();
    res.status(200).json(prodct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getOneProduct(req, res) {
  try {
    const product = await Product.findOne({ProductId : req.params.id});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

async function createProduct(req, res){
  try {
    if(req.files){
      const { ImageProduct } = req.files;
      let directory = `${__dirname}/../assets/${req.user}`

      if(!fs.existsSync(directory)){
        fs.mkdirSync(directory);
      }

      pathProduct = `${directory}/${ImageProduct.name}`;
      pathProduct = path.resolve(__dirname, pathProduct);
      req.body.ImageProduct = pathProduct;
      ImageProduct.mv(pathProduct);
    }
    Object.assign(req.body, {UserId: req.user});
    const product = new Product(req.body);
    await product.save();
    res.status(201).json("product created successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getProductByVideo(req, res) {
  try {
    const product = await Product.find({ VideoId: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function editProduct(req, res) {
  try {
    const { id } = req.params;
    const product = req.body;
    const option = { new: true };    
    
    if (req.files) {
      const { ImageProduct } = req.files;
      const newImage = await Product.findOne({ProductId : id});
      
      if(!newImage) res.status(404).json({ message: "Product not found" });

      if(newImage.ImageProduct != null){
        fs.unlinkSync(newImage.ImageProduct);
      }

      let directory = `${__dirname}/../assets/${req.user}`
      pathProduct = `${directory}/${ImageProduct.name}`;
      pathCover = path.resolve(__dirname, pathCover);
      req.body.ImageProduct = pathCover;

      ImageProduct.mv(pathCover);
    }
    
    const result = await Product.findOneAndUpdate({ProductId : id}, product, option);
    res.status(201).json("Product edited successfully");
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

async function deleteProduct(req, res) {
  try {
    const product= await Product.findByIdAndDelete(req.params.id);
    if(!product) res.status(404).json({ message: "Product not found" });
    if(product.ImageThumbnail != null){
      fs.unlinkSync(product.ImageThumbnail);
    }
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getProduct,
  createProduct,
  getOneProduct,
  editProduct,
  deleteProduct,
  getProductByVideo
};
