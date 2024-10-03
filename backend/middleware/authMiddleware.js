const jwt = require('jsonwebtoken');
const TokenBlacklist = require('../models/tokenBlackListModel');

const authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "Access denied, token missing" });
    }
    try {
        const tokenValue = token.split(' ')[1];

        const blacklistedToken = await TokenBlacklist.findOne({ token: tokenValue });
        if (blacklistedToken) {
            return res.status(403).json({ message: "Token is invalid" });
        }

        const verified = jwt.verify(tokenValue, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};

module.exports = authenticateToken;
