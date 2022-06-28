const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/products' );

/* GET products cart / details page. */
router.get( '/products', controller.product);
router.get( '/productcart', controller.productcart);
router.get( '/productdetail', controller.productdetail);
router.get( '/productcreate', controller.productcreate);
router.get( '/productedit', controller.productedit);

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', controller.create); 
router.post('/products/create', controller.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/products/detail/:id', controller.detail); 
/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', controller.edit); 
router.put('/products/edit/:id', controller.update); 

module.exports = router;
