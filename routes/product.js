const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/products' );

/* GET products cart / details page. */
router.get( '/products', controller.product);
router.get( '/productcart', controller.productcart);
/* router.get( '/productdetail', controller.productdetail);
router.get( '/productcreate', controller.productcreate);
router.get( '/productedit', controller.productedit); */

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', controller.create); 
router.post('/products/create', controller.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/products/:id', controller.detail); 
/*** EDIT ONE PRODUCT ***/ 
router.get('/products/:id/edit', controller.edit); 
router.put('/products/:id', controller.update); 
/*** DELETE ONE PRODUCT***/ 
router.delete('/products/:id', controller.destroy);
module.exports = router;
