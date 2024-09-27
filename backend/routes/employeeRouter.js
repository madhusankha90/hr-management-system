const express = require('express');
const { createEmployee,  updateEmployee } = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/personal-info',createEmployee);
router.put('/update-employee', updateEmployee);



module.exports = router;