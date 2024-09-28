const express = require('express');
const { createEmployee,  updateEmployee, createContact } = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/create-employee',createEmployee);
router.post('/create-contact', createContact);
router.put('/update-employee/:id', updateEmployee);




module.exports = router;