const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token) return res.status(401).json({message: "Unauthorized - No token"});

        const verified = jwt.verify(token, process.env.JWT_SECRET);
  
        if(!verified) return res.status(401).json({message: "Unauthorized - Token verification failed"});

        const user = await User.findById(verified.userId).select("-password");

        if(!user) return res.status(401).json({message: "Unauthorized - No user found"});

        req.user = user;

        next();

    } catch (error) {
        console.log("error in protectRoute middleware",error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = protectRoute;