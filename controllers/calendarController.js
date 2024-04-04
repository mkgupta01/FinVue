const userModel = require('../models/userModel');

exports.addYear = async (req, res) => {

    const { year } = req.body;
    const user = await userModel.findById(req.params.id);

    console.log(user);

    user.year = year;
    await user.save();

    res.status(200).json({
        success: true,
        user
    })
}