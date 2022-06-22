const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/products' );

/* GET products cart / details page. */

router.get( '/product', controller.product);
router.get( '/productcart', controller.productcart);
router.get( '/productdetail', controller.productdetail);
router.get( '/productcreate', controller.productcreate);
router.get( '/productedit', controller.productedit);

module.exports = router;
