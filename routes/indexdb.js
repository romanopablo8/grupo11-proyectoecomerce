const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/indexdb' );

/* dbecomerce. */
router.get( '/ecomerce', controller.ecomerce );

module.exports = router;