const Employee = require("../models/userInfo/employeeModel");
//const ContactDetail = require('../models/userInfo/contactModel')


// const createEmployee = async (req, res) => {
//   const { personalDetails= {} ,contactsDetails = {},customFields = {} } = req.body;
//   try {
//     const employee = new Employee({personalDetails,contactsDetails,customFields});
//     await employee.save();
//     res.status(200).json({ message: "personal details saved successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "internal server error" });
//   }
// };



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



const createEmployee = async (req, res) => {
  try {
    const { personalDetails = {}, contactsDetails = {}, customFields = {} } = req.body;

    // Create the new employee with the provided and default data
    const employee = new Employee({
      personalDetails: {
        fullName: personalDetails.fullName || "none",
        employeeId: personalDetails.employeeId || "none",
        otherId: personalDetails.otherId || "none",
        licenseNumber: personalDetails.licenseNumber || "none",
        licenseExpireDate: personalDetails.licenseExpireDate || "none",
        nationality: personalDetails.nationality || "Sri Lanka",
        maritalStatus: personalDetails.maritalStatus || "none",
        dateOfBirth: personalDetails.dateOfBirth || "none",
        gender: personalDetails.gender || "none"
      },
      contactsDetails: {
        address: {
          street1: contactsDetails.address?.street1 || "none",
          street2: contactsDetails.address?.street2 || "none",
          city: contactsDetails.address?.city || "none",
          state: contactsDetails.address?.state || "none",
          zip: contactsDetails.address?.zip || "none",
          country: contactsDetails.address?.country || "none"
        },
        telePhone: {
          home: contactsDetails.telePhone?.home || "none",
          mobile: contactsDetails.telePhone?.mobile || "none",
          work: contactsDetails.telePhone?.work || "none"
        },
        email: {
          workEmail: contactsDetails.email?.workEmail || "none",
          otherEmail: contactsDetails.email?.otherEmail || "none"
        }
      },
      customFields: {
        bloodType: customFields.bloodType || "none",
        testField: customFields.testField || "none"
      }
    });

    await employee.save();
    res.status(200).json({ message: "Employee created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};



module.exports = { createEmployee,  updateEmployee , createContact};
