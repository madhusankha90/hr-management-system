const Employee = require('../models/userInfo/personalInfo');


const createEmployee = async (req,res) => {
        try {
            const employee = new Employee(req.body);
            await employee.save();
            res.status(200).json({message:"personal details saved successfully"})
        } catch (error) {
            res.status(500).json({error:"internal server error"});
        }
}



module.exports = { createEmployee };

