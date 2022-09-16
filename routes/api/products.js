const express = require('express');
const router = express.Router();
const productAPIController  =require('../../controllers/api/productAPIController');

//Listado de users
router.get('/', productAPIController.list);
//Details
router.get('/:id', productAPIController.detail);


module.exports = router;