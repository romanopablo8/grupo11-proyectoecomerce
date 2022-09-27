const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("firstname")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Tienes que completar el nombre"),

  body("lastname")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Tienes que completar el apellido"),

  /* body('user_name').notEmpty().withMessage('Tienes que escribir un nombre de usuario'), */

  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),

  body("category_id").notEmpty().withMessage("Tienes que elegir una categoria"),
  body("foto_perfil").custom((value, { req }) => {
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
  body("password1")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("minimo 8 caracteres"),
  body("password1").custom((value, { req }) => {
    const regUserpassword =
      /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    // Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial y 8 caracteres.

    if (!regUserpassword.test(value)) {
      throw new Error(
        "Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial."
      );
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),

  body("password").custom((value, { req }) => {
    if (value !== req.body.password1) {
      throw new Error("Password y Repetir password no coinciden");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
];
