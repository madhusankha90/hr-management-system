const Employee = require("../models/userInfo/employeeModel");

const createEmployee = async (req, res) => {
  const { personalDetails, contactsDetails, customFields } = req.body;

  try {
    const existEmployee = await Employee.findOne({ "personalDetails.employeeId": personalDetails.employeeId });

    if (existEmployee) {
      return res.status(409).json({ message: "Employee ID already exists" });
    }

    const employee = new Employee({
      personalDetails,
      contactsDetails: contactsDetails || {
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
      customFields: customFields || {
        testField: "none",
      },
    });
    await employee.save();

    res.status(201).json({ message: "Employee created successfully" });
  
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  const { employeeId } = req.body;
  const { personalDetails, contactsDetails, customFields } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ employeeId });

    if (existingEmployee) {
      const updatedEmployee = await Employee.findOneAndUpdate(
        { employeeId },
        {
          $set: {
            ...(personalDetails && { personalDetails }),
            ...(contactsDetails && { contactsDetails }),
            ...(customFields && { customFields }),
          },
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    console.error("Error updating/creating employee:", error);
    res
      .status(500)
      .json({ message: "Error updating/creating employee", error });
  }
};

module.exports = { createEmployee, updateEmployee };