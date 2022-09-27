const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  let type = req.body.type;
    var folder = path.join(__dirname, "../public/img/users");
    //  var folder = path.join(__dirname, `../public/img/${type}`);
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    let imageName = "user-" + Date.now() + path.extname(file.originalname);
    //   var imageName = `user-${Date.now()}${path.extname(file.originalname)}`;
    callback(null, imageName);
  },
});
let uploadFile = multer({ storage });

module.exports = uploadFile;
