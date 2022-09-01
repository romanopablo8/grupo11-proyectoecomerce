const path = require('path');
const multer = require('multer')

let storage = multer.diskStorage ({
    destination: (req, file, callback) => {
   
        var folder = path.join(__dirname, '../public/img/img-products');
   
        callback(null, folder)
} ,
    filename: (req, file, callback) => {
        let imageName ='prod-'+ Date.now() + path.extname(file.originalname);
   //   var imageName = `user-${Date.now()}${path.extname(file.originalname)}`;
        callback(null, imageName)
}
})
let  uploadFile = multer({storage});


module.exports =  uploadFile;