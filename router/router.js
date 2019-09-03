const express = require('express');
const router = express.Router();
const authController = require('./../controllers/auth');

router.post('/api/add_user', authController.registerUser);
router.post('/api/login_user', authController.login);
router.get('/api/get_session', authController.getSession);

module.exports = router;