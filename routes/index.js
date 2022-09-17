const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/main' );

/* GET home page. */
router.get('/', controller.home );
router.get ('/nosotros', controller.nosotros );
router.get ('/colecciones', controller.colecciones);
router.get ('/contacto', controller.contacto);
router.get ('/garantia', controller.garantia);

/* REDES SOCIALES. */
router.get ('/face', controller.face);
router.get ('/ig', controller.ig);
router.get ('/wp', controller.wp);
router.get ('/youtube', controller.youtube);



module.exports = router;
