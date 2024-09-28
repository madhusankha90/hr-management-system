const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    personalDetails: {
      fullName: {
        type: String,
        default: none
      },
      employeeId: {
        type: String,
        default: none
      },
      otherId: {
        type: String,
        default: none
      },
      licenseNumber: {
        type: String,
        default: none
      },
      licenseExpireDate: {
        type: Date,
        default: none
      },
      nationality: {
        type: String,
        default: "Sri Lanka",
      },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Other"],
        default: none
      },
      dateOfBirth: {
        type: Date,
        required: false,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: false,
      },
    },
    contactsDetails: {
      address: {
        street1: {
          type: String,
          required: false,
        },
        street2: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        zip: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
      },
      telePhone: {
        home: {
          type: String,
          required: false,
        },
        mobile: {
          type: String,
          required: false,
        },
        work: {
          type: String,
          required: false,
        },
      },
      email: {
        workEmail: {
          type: String,
          required: true,
        },
        otherEmail: {
          type: String,
          required: false,
        },
      },
    },
    customFields: {
      bloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        required: false,
      },
      testField: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;
