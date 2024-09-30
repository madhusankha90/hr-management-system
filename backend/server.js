const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const ConnectDb = require('./dbConnect');
const employeeRouter = require('./routes/employeeRouter')
const uploadRouter = require('./routes/uploadRouter')

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/user', employeeRouter);
app.use('/api/upload', uploadRouter);

ConnectDb();


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);   
})
