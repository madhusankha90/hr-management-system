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
  const { employeeId } = req.body;  // extracting employeeId from the request body
  const { personalDetails, contactsDetails, customFields } = req.body;  // extracting the data to update

  try {
    // Check if the employee exists
    const existingEmployee = await Employee.findOne({ employeeId });

    if (existingEmployee) {
      // Update the existing employee
      const updatedEmployee = await Employee.findOneAndUpdate(
        { employeeId },
        {
          $set: {
            ...(personalDetails && { personalDetails }),
            ...(contactsDetails && { contactsDetails }),
            ...(customFields && { customFields }),
          }
        },
        { new: true, runValidators: true } // Return the updated document and apply validation
      );

      res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
    } else {
      // Create a new employee if it doesn't exist
      if (!contactsDetails && !customFields) {
        // Create a new employee with default contactsDetails and customFields
        const newEmployee = new Employee({
          personalDetails,
          contactsDetails: {
            address: {
              street1: "none",
              street2: "none",
              city: "none",
              state: "none",
              zip: "none",
              country: "none",
            },
            telePhone: {
              home: "none",
              mobile: "none",
              work: "none",
            },
            email: {
              workEmail: "none",
              otherEmail: "none",
            },
          },
          customFields: {
            testField: "none",
          },
        });

        await newEmployee.save();

        res.status(201).json({ message: "Employee created successfully", newEmployee });
      } else {
        // Create a new employee with the provided data
        const newEmployee = new Employee({
          personalDetails,
          contactsDetails,
          customFields,
        });

        await newEmployee.save();

        res.status(201).json({ message: "Employee created successfully", newEmployee });
      }
    }
  } catch (error) {
    console.error("Error updating/creating employee:", error);
    res.status(500).json({ message: "Error updating/creating employee", error });
  }
};





module.exports = { createEmployee,  updateEmployee };
