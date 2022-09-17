const express = require('express');
const router = express.Router();
const userAPIController  =require('../../controllers/api/userAPIController');

//Listado de users
router.get('/', userAPIController.list);
//Details
router.get('/:id', userAPIController.detail);

module.exports = router;