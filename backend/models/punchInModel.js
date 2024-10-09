const mongoose = require('mongoose');

const punchSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    note:{
        
    }
})