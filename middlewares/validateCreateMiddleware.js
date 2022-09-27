const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Tienes que completar el nombre"),

  body("descripcion")
    .notEmpty()
    .withMessage("Tienes que escribir una descripcion")
    .bail()
    .isLength({ min: 20 })
    .withMessage("minimo 20 caracteres"),

  body("category").notEmpty().withMessage("Tienes que elegir una category"),

  body("colors").notEmpty().withMessage("Tienes que elegir un color"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
  body("descripcionfull")
    .notEmpty()
    .withMessage("Tienes que escribir la descripcion full"),
];
