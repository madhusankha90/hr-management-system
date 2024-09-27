const express = require('express');
const { createEmployee, newUser } = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/personal-info',createEmployee);
router.post('/adduser',newUser)

module.exports = router;