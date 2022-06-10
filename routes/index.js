const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/main' );

/* GET home page. */
router.get( '/', controller.home );

module.exports = router;
