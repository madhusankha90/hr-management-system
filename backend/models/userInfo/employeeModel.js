const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    personalDetails: {
        fullName: {
            type: String,
            required: true,
          },
          employeeId: {
            type: String,
            required:true,
          },
          otherId: {
            type: String,
            required: false
          },
          licenseNumber: {
            type: String,
            required: false,
          },
          licenseExpireDate: {
            type: Date,
            required: false
          },
          nationality:{
            type:String,
            default: 'American'   
          },
          maritalStatus:{
            type:String,
            enum: ['Single', 'Married', 'Other'],
            required: true
          },
          dateOfBirth:{
            type: Date,
            required: true
          },
          gender:{
            type: String,
            enum: ['male','female'],
            required: true
          }
    },
    customFields:{
        bloodType:{
            type:String,
            enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
            required: false
        },
        testField:{
            type: String,
            required: false
        }
    }
},{
    timestamps:true
});

const Employee = mongoose.model('employees',employeeSchema);

module.exports = Employee;
