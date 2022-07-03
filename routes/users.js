const express = require('express');
const router  = express.Router();

const multer = require('multer')
const path = require('path')
const controller = require( '../controllers/user' );
//const multerDiskStorage = require ('../middlewares/diskStorage');
let invitadoMiddleware = require('../middlewares/invitadoMiddleware');
//const diskStorage = require ('../middlewares/diskStorage')

const storage = multer.diskStorage ({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img/users');
        console.log(folder);
        callback(null, folder)
} ,
    filename: (req, file, callback) => {
        console.log(file);
        let imageName ='user-'+ Date.now() + path.extname(file.originalname);
        callback(null, imageName)
}
})
let fileUpload = multer({ storage: storage });



//let fileUpload = multer({storage :  multerDiskStorage });


// /* GET LOGIN/REGISTER page. */
router.get( '/login', controller.login);
router.post('/login', controller.processlogin)
router.get( '/register', invitadoMiddleware, controller.register);
router.post('/register', fileUpload.single('avatar'), controller.registerStore);
module.exports = router;
