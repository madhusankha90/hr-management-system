const express = require('express');
const { createEmployee,  updateEmployee} = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/create-employee',createEmployee);
router.put('/update-employee/:id', updateEmployee);




module.exports = router;