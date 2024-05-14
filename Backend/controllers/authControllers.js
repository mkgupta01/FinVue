const userModel = require('../models/userModel');

exports.registerController = async (req, res) => {
    try {
        const { FirstName, LastName, email, password, } = req.body;

        let existinguser = await userModel.findOne({ email });
        if (existinguser) {
            res.status(500).json({
                success: false,
                message: "User already registered"
            })
            return;
        }

        let newUser = await userModel.create({ FirstName, LastName, email, password });
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
            res.status(201).json({
                success: false,
                message: "User not registered"
            })
            return
        }

        const isMatched = await userEntered.matchPassword(password);

        if (!isMatched) {
            res.status(200).json({
                success: false,
                message: "Password mismatch"
            })
            return
        }

        const token = userEntered.generateToken();
        res.status(200)
        .cookie("token", token, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 1000), //30 din ko milisec m likha hai
            httpOnly: true
        })
        .json({
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

