const router = require('express').Router();
const AuthController = require('./AuthController');

router.post('/login' , AuthController.login);

module.exports = router;