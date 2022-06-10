const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/products' );

/* GET home page. */
router.get( '/productcart', controller.productcart);
router.get( '/productdetail', controller.productdetail);

module.exports = router;
