const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userRole:{
        type: String,
        enum: ["admin","employee"],
        required: true
    },
    employeeName:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["enable", "disable"],
        required: true
    },
    employeeId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('users', userSchema);

module.exports = User;