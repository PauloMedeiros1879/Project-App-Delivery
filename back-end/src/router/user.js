const router = require('express').Router();
const userController = require('../controller/user');

router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;