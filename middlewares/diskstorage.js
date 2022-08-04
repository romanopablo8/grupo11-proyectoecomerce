const path = require('path');
const multer = require('multer')

let storage = multer.diskStorage ({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img/users');
        callback(null, folder)
} ,
    filename: (req, file, callback) => {
        let imageName ='user-'+ Date.now() + path.extname(file.originalname);
    //  let fileName = `user-${Date.now()}${path.extname(file.originalname)}`;
        callback(null, imageName)
}
})
let  uploadFile = multer({storage});


module.exports =  uploadFile;