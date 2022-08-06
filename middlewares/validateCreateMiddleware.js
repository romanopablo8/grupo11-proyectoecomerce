const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'), 
    body('category').notEmpty().withMessage('Tienes que escribir una category'), 
		
	body('colors').notEmpty().withMessage('Tienes que elegir un color'),
	body('image').custom((value, { req }) => {
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
    body('descripcionfull').notEmpty().withMessage('Tienes que escribir la descripcion full')
]