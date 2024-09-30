const Employee = require("../models/userInfo/employeeModel");



const createEmployee = async (req, res) => {
  const { personalDetails = {}, contactsDetails = {}, customFields = {} } = req.body;
  try {
    // Validate that required personal details are provided
    if (!personalDetails.fullName || !personalDetails.employeeId) {
      return res.status(400).json({ message: "Required personal details are missing" });
    }

    // Create new employee document
    const employee = new Employee({ personalDetails, contactsDetails, customFields });
    await employee.save();

    // Return success message with the created employee
    res.status(200).json({ message: "Employee created successfully", employee });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { personalDetails, contactsDetails, customFields } = req.body;

    // Find the employee by ID and update the fields
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(personalDetails && { personalDetails }),
          ...(contactsDetails && { contactsDetails }),
          ...(customFields && { customFields }),
        },
      },
      { new: true, runValidators: true } // Return the updated document and apply validation
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Return the updated employee document
    res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Error updating employee", error });
  }
};





module.exports = { createEmployee,  updateEmployee };
