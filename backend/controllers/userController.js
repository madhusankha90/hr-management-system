const User = require('../models/userModel');
const TokenBlacklist = require('../models/tokenBlackListModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req,res) => {
    const {userRole,userName,status,employeeId,password,confirmPassword} = req.body;
    try {
        
        const extingUser = await User.findOne({ employeeId});
        if (extingUser){
            return res.status(409).json({message:"user already exists"})
        }

      if(password !== confirmPassword){
        return res.status(400).json({message: "password do not match..!"});
      }
      const hash = bcrypt.hashSync(password, 10);
      const users = new User({userRole,userName,status,employeeId,password: hash,confirmPassword: hash});
      await users.save();

      res.status(201).json({message:"user created successfully" });
  
    } catch (error) {
      res.status(400).json({error: "user save error"})
    }
  }

const loginUser = async (req,res) => {
  const {userName,password} = req.body;
  try {
    const user = await User.findOne({userName});
    if (!user) {
      return res.status(404).json({message:"user not found"})
    }
    const isPasswordValid = await bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({message:"invalid password"});
    }
    const token = jwt.sign(
      { id: user._id, userRole: user.userRole },
       process.env.JWT_SECRET, 
      {expiresIn: process.env.EXPIRE_IN});
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
          id: user._id,
          userRole: user.userRole,
          userName: user.userName,
      }
  });

  } catch (error) {
    res.status(500).json({error:"login error"})
  }
}

const logOutUser = async (req,res) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    const expiration = new Date(jwt.decode(token).exp * 1000);
    await TokenBlacklist.create({ token, expiration });
    res.status(200).json({ message: "user logged out successfully." })

  } catch (error) {
    res.status(500).json({ message: "Logout failed." });
  }
}

module.exports = {createUser ,loginUser, logOutUser};