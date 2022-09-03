const express = require('express');
const router  = express.Router();
const uploadFile = require ('../middlewares/diskStorageprod')
const dbproductcontroller = require( '../controllers/productdb' );

/*** CREATE ONE PRODUCT ***/ 
router.get('/prodb/add', dbproductcontroller.add); 
router.post('/prodb/create', uploadFile.single('image'), dbproductcontroller.store); 

/* PRODUCT list */
router.get( '/prodb/productlist', dbproductcontroller.list );
router.post( '/prodb/productlist', dbproductcontroller.buscar );

/* PRODUCT details */
router.get( '/prodb/detail/:id', dbproductcontroller.detail );

/* PRODUCT EDIT */
router.get( '/prodb/edit/:id', dbproductcontroller.edit );
/* PRODUCT UPDATE */
router.put( '/prodb/update/:id', dbproductcontroller.update );
/* PRODUCT ERASE */
router.delete( '/prodb/detail/:id', dbproductcontroller.erase );

module.exports = router;