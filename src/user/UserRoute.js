const router = require('express').Router();
const UserController = require('./UserController');

router.post('/register', UserController.register);

module.exports = router;