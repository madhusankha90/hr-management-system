const express = require('express');
const app = express();
const cors = require('cors');

const ConnectDb = require('./dbConnect');
const router = require('./routes/employeeData')

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router)

ConnectDb();


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);   
})
