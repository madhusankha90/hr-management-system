const express = require('express');
const { createEmployee,  updateEmployee, addUser, updateUser } = require('../controllers/employeeContoller');
const router = express.Router();

router.post('/personal-info',createEmployee);
router.put('/update-employee', updateEmployee);
router.post('/adduser',addUser);
router.put('/updateuser',updateUser)



module.exports = router;