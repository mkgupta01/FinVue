const userModel = require('../models/userModel');

exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let existinguser = await userModel.findOne({ email });
        if (existinguser) {
            res.status(500).json({
                success: false,
                message: "User already registered"
            })
        }

        let newUser = await userModel.create({ name, email, password });
        res.status(201).json({
            success: true,
            newUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in register controller",
            error: error
        })
    }
}

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userEntered = await userModel.findOne({ email });

        if (!userEntered) {
            res.status(501).json({
                success: false,
                message: "User not registered"
            })
        }

        const isMatched = userEntered.matchPassword(password);

        if (!isMatched) {
            res.status(500).json({
                success: false,
                message: "Password mismatch"
            })
        }

        res.status(200).json({
            success: true,
            userEntered
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login Error"
        })    
    }
}

