const express = require('express');
const { createUser, loginUser, logOutUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logOutUser);

router.get('/admin', authenticateToken, (req, res) => {
    
    if (!req.user || req.user.userRole !== 'admin') {
      return res.status(403).json({ message: "Access denied, admin only" });
    }
  
    res.status(200).json({ message: "Welcome, admin!" });
  });
  

module.exports = router;