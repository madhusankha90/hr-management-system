const express = require('express');
const { createEmployee } = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/employee',createEmployee);

module.exports = router;