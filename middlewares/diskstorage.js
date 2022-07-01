
const multer = require('multer')
const { diskStorage } = require("multer");

let multerDiskStorage = multer.diskStorage ({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img/users');
        callback(null, folder)
} ,
    filename: (req, file, callback) => {
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName)
}
})
let fileUpload = multer({storage: multerDiskStorage});

module.exports = diskStorage