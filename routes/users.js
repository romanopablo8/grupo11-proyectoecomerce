const express = require('express');
const router  = express.Router();

const controller = require( '../controllers/user' );

// /* GET LOGIN/REGISTER page. */
router.get( '/login', controller.login);
router.post('/login', controller.processlogin)
router.get( '/register', controller.register);
router.post( '/register', controller.register);
module.exports = router;
