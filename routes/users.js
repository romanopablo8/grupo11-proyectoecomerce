const express = require('express');
const router  = express.Router();
const multer = require('multer')
const path = require('path')
const diskStorage = require ('../middlewares/diskStorage')
const controller = require( '../controllers/user' );


let fileUpload = multer({storage: diskStorage});
let invitadoMiddleware = require('../middlewares/invitadoMiddleware');

// /* GET LOGIN/REGISTER page. */
router.get( '/login', controller.login);
router.post('/login', controller.processlogin)
router.get( '/register', invitadoMiddleware, controller.register);
router.post( '/register', fileUpload.single('avatar'), controller.register);
module.exports = router;
