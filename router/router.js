const express = require('express');
const router = express.Router();
const authController = require('./../controllers/auth');

router.post('/api/add_user', authController.registerUser);

module.exports = router;