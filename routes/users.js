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
/*
const storage = multer.diskStorage ({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img/users');
       // console.log(folder);
        callback(null, folder)
} ,
    filename: (req, file, callback) => {
      //  console.log(file);
        let imageName ='user-'+ Date.now() + path.extname(file.originalname);
        callback(null, imageName)
}
})
let uploadFile = multer({ storage: storage });
*/

/*const validations = [
	body('firstname').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('user_name').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	
	body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
]
*/
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
