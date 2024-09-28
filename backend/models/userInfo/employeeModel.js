const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    personalDetails: {
      fullName: {
        type: String,
        default: "none"
      },
      employeeId: {
        type: String,
        default: "none"
      },
      otherId: {
        type: String,
        default: "none"
      },
      licenseNumber: {
        type: String,
        default: "none"
      },
      licenseExpireDate: {
        type: Date,
        default: "none"
      },
      nationality: {
        type: String,
        default: "Sri Lanka",
      },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Other"],
        default: "none"
      },
      dateOfBirth: {
        type: Date,
        required: false,
        default: "none"
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        default: "none"
      },
    },
    contactsDetails: {
      address: {
        street1: {
          type: String,
          default: "none"
        },
        street2: {
          type: String,
          default: "none"
        },
        city: {
          type: String,
          default: "none"
        },
        state: {
          type: String,
          default: "none"
        },
        zip: {
          type: String,
          default: "none"
        },
        country: {
          type: String,
          default: "none"
        },
      },
      telePhone: {
        home: {
          type: String,
          default: "none"
        },
        mobile: {
          type: String,
          default: "none"
        },
        work: {
          type: String,
          default: "none"
        },
      },
      email: {
        workEmail: {
          type: String,
          default: "none"
        },
        otherEmail: {
          type: String,
          default: "none"
        },
      },
    },
    customFields: {
      bloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        default: "none"
      },
      testField: {
        type: String,
        default: "none"
      },
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;
