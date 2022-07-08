const path = require('path');
const multer = require('multer')
//const { diskStorage } = require("multer");

/*WARNING: Make sure that you always handle the files that a user uploads.
Never add multer as a global middleware since a malicious user could upload 
files to a route that you didn't anticipate. Only use this function on routes
 where you are handling the uploaded files.
*/

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