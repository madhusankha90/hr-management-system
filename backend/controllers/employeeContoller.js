const Employee = require("../models/userInfo/employeeModel");
const User = require("../models/userInfo/userModel");

const createEmployee = async (req, res) => {
  
  try {
    

    const employee = new Employee(req.body);
    await employee.save();
    res.status(200).json({ message: "personal details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const updateEmployee = async (req,res) => {
    const {fullName,employeeId,otherId,licenseNumber,licenseExpireDate,nationality,maritalStatus,dateOfBirth,
      gender,bloodType,testField
    } = req.body;

    try {
      await Employee.updateOne({fullName,employeeId,otherId,licenseNumber,licenseExpireDate,nationality,maritalStatus,dateOfBirth,
        gender,bloodType,testField});
      res.status(200).json({message:"employee updated"})
    } catch (error) {
      res.status(500).json({error:"internal server error"})
    }
}

const newUser = async (req, res) => {
  const { userName } = req.body;
  try {
    const user = new User({ userName });
    await user.save();
    res.status(200).json({ message: "user saved" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = { createEmployee, newUser };
