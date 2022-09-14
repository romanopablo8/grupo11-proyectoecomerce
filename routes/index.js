const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/main' );

/* GET home page. */
router.get('/', controller.home );
router.get ('/nosotros', controller.nosotros );
router.get ('/colecciones', controller.colecciones );

module.exports = router;
