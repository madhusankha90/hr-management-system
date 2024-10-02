const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/createuser', createUser);
router.post('/loginuser', loginUser)

module.exports = router;