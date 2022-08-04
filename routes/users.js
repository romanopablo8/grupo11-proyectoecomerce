const express = require('express');
const router  = express.Router();

const multer = require('multer')
const path = require('path')

//const { body } = require('express-validator');
const validations = require('../middlewares/validateRegisterMiddleware');
const controller = require( '../controllers/user' );
//let invitadoMiddleware = require('../middlewares/invitadoMiddleware');
const uploadFile = require ('../middlewares/diskStorage')

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// /* GET LOGIN/REGISTER page. */
router.get( '/login',guestMiddleware, controller.login);
router.post('/login', controller.processlogin)
router.get( '/register',guestMiddleware, controller.register);
router.post('/register', uploadFile.single('avatar'), validations, controller.registerStore);

// Perfil de Usuario
router.get('/profile',authMiddleware, controller.profile);

// Logout
router.get('/logout', controller.logout);

module.exports = router;
