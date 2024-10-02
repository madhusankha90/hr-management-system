const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = async (req,res) => {
    const {userRole,employeeName,status,employeeId,password,confirmPassword} = req.body;
    try {
        
        const extingUser = await User.findOne({ employeeId});
        if (extingUser){
            return res.status(409).json({message:"user already exists"})
        }

      if(password !== confirmPassword){
        return res.status(400).json({message: "password do not match..!"});
      }
      const hash = bcrypt.hashSync(password, 10);
      const users = new User({userRole,employeeName,status,employeeId,password: hash,confirmPassword: hash});
      await users.save();
      res.status(200).json({message:"user saved"});
  
    } catch (error) {
      res.status(400).json({error: "user save error"})
    }
  }

const loginUser = async (req,res) => {
  const {employeeName,password} = req.body;
  try {
    const user = await User.findOne({employeeName});
    if (!user) {
      return res.status(404).json({message:"user not found"})
    }
    const isPasswordValid = await bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({message:"invalid password"});
    }

    res.status(200).json({message:"login successfull"})
  } catch (error) {
    res.status(500).json({error:"login error"})
  }
}

module.exports = {createUser ,loginUser};