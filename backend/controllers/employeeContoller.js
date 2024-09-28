const Employee = require("../models/userInfo/employeeModel");
const ContactDetail = require('../models/userInfo/contactModel')


const createEmployee = async (req, res) => {
  const { personalDetails ,contactsDetails = {},customFields = {} } = req.body;
  try {
    const employee = new Employee({personalDetails,contactsDetails,customFields});
    await employee.save();
    res.status(200).json({ message: "personal details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};



const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, personalDetails, customFields } = req.body;

    // Find the employee by ID and update the fields
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { userName, personalDetails, customFields },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
};

const createContact = async (req,res) => {
  const {contactsDetais} = req.body;
  try {
    const contact = new ContactDetail({contactsDetais});
    await contact.save();
    res.status(200).json({message:"new contact created"})
  } catch (error) {
    res.status(500).json({error:"internal server error"})
  }
}


module.exports = { createEmployee,  updateEmployee , createContact};
