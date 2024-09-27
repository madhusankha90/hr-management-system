const Employee = require("../models/userInfo/employeeModel");
const User = require('../models/userInfo/user')


const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(200).json({ message: "personal details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  const {
    userName,
    fullName,
    employeeId,
    otherId,
    licenseNumber,
    licenseExpireDate,
    nationality,
    maritalStatus,
    dateOfBirth,
    gender,
    bloodType,
    testField,
  } = req.body;

  const updateEmployeeData = {
    "personalDetails.fullName": fullName,
    "personalDetails.employeeId": employeeId,
    "personalDetails.otherId": otherId,
    "personalDetails.licenseNumber": licenseNumber,
    "personalDetails.licenseExpireDate": licenseExpireDate,
    "personalDetails.nationality": nationality,
    "personalDetails.maritalStatus": maritalStatus,
    "personalDetails.dateOfBirth": dateOfBirth,
    "personalDetails.gender": gender,
    "customFields.bloodType": bloodType,
    "customFields.testField": testField,
  };

  try {
    const updateResult = await Employee.updateOne(
      { userName },
      { $set: updateEmployeeData }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(404).json({ message: "Employee not found or no changes made" });
    }

    res.status(200).json({ message: "employee updated" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const addUser = async(req,res) => {
  const {name,phoneNumber} = req.body;
  try {
    const user = new User({name,phoneNumber});
    await user.save();
    res.status(200).json({message:"user saved"})
  } catch (error) {
    res.status(500).json({error:"internal error"})
  }
  
}
const updateUser = async (req,res) => {
  const {name,phoneNumber} = req.body;
  try {
    await User.updateOne({name},{$set:{phoneNumber}})
    res.status(200).json({message: "user updated"})
  } catch (error) {
    res.status(500).json({error:"error"})
  }
}



module.exports = { createEmployee,  updateEmployee ,addUser,updateUser};
