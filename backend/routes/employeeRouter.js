const express = require('express');
const { createEmployee,  updateEmployee, createPunch} = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/create-employee',createEmployee);
router.put('/update-employee', updateEmployee);
router.post('/create-punch', createPunch);




module.exports = router;