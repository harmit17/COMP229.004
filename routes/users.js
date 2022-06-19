//Student Name - Harmit Chauhan
//Student ID - 301221772
var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')


router.get('/', userController.user);


//user
router.get('/harmit', userController.harmit);


// login
router.get('/login', userController.renderlogin);
router.post('/login', userController.login);

// register
router.get('/register', userController.renderregister);
router.post('/register', userController.register);


router.get('/ContactList', userController.ContactList);

//  logout
router.get('/logout', userController.logout);

module.exports = router;