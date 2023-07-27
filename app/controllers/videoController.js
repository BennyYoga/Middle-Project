const Video = require("../models/video");
const path = require("path");
const fs = require("fs");

// falidateInput = (videoUpdates) => {
//   const validKeys = ['Title', 'Description', 'ImageThumbnail', 'VideoEmbeded', 'TimeStamp'];
//   const isAtLeastOneValidKey = Object.keys(videoUpdates).some(key => validKeys.includes(key));

//   if (!isAtLeastOneValidKey) {
//     return false;
//   }
//   else {
//     return true;
//   }
// };

async function getVideo(req, res) {
  try {
    const video = await Video.find();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getOneVideo(req, res) {
  try {
    const video = await Video.findOne({VideoId : req.params.id});
    res.status(200).json(video);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getVideoByUser(req, res) {
  try {
    const video = await Video.find({ UserId: req.user});
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createVideo(req, res) {
  try {
    
    if (req.files) {
      const { ImageThumbnail} = req.files;

      let directory = `${__dirname}/../assets/${req.user}`
      if(!fs.existsSync(directory)){
        fs.mkdirSync(directory);
      }

      pathCover = `${directory}/${ImageThumbnail.name}`;
      pathCover = path.resolve(__dirname, pathCover);
      ImageThumbnail.mv(pathCover);
      req.body.ImageThumbnail = pathCover;
    }
    Object.assign(req.body, {UserId: req.user});
    const video = new Video(req.body);
    await video.save();
    res.status(201).json("Video created successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function editVideo(req, res) {
  try {
    const { id } = req.params;
    const video = req.body;
    const option = { new: true };    
    

    if (req.files) {
      const { ImageThumbnail } = req.files;
      const newImage = await Video.findOne({VideoId : id});

      if(!newImage) res.status(404).json({ message: "Video not found" });

      if(newImage.ImageThumbnail != null){
        fs.unlinkSync(newImage.ImageThumbnail);
      }

      let directory = `${__dirname}/../assets/${req.user}`
      if(!fs.existsSync(directory)){
        fs.mkdirSync(directory);
      }

      pathCover = `${__dirname}/../assets/${req.user}/${ImageThumbnail.name}`;
      pathCover = path.resolve(__dirname, pathCover);
      req.body.ImageThumbnail = pathCover;

      ImageThumbnail.mv(pathCover);
    }
    
    const result = await Video.findOneAndUpdate({VideoId : id}, video, option);
    res.status(201).json("Video edited successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteVideo(req, res) {
  try {
    const video = await Video.findOne({VideoId :req.params.id});
    if(!video) res.status(404).json({ message: "Video not found" });
    if(video.ImageThumbnail != null){
      fs.unlinkSync(video.ImageThumbnail);
    }
    await Video.findOneAndDelete({VideoId :req.params.id});
    res.status(200).json("Video deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getVideo,
  getOneVideo,
  createVideo,
  deleteVideo,
  editVideo,
  getVideoByUser
};
