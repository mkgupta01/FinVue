const userModel = require('../models/userModel');
const { LocalStorage } = require('node-localstorage') 

exports.isLoggedIn = async (req, res, next) => {
    try {
        var localStorage = new LocalStorage('./scratch')
        var id = localStorage.getItem(id);

        if (!id) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = foundUser;
        next();
    } catch (error) {
        console.error("LoggedIn middleware error:", error); 
        res.status(500).json({
            success: false,
            message: "An internal server error occurred"
        });
    }
};