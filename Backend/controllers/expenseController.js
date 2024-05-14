const userModel = require('../models/userModel');

exports.addExpense = async (req, res) => {
    try {
        const { month, inVal, outVal, date, msg } = req.body;

        const user = await userModel.findById(req.params.id);
        const expense = `${month}_${date}_${inVal}_${outVal}_${msg}`

        user.expenses.push(expense)

        await user.save()

        res.status(201).json({
            success: true,
            "message": "Data added",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            "message": "Error in enetering data in expenses"
        })
    }
}

exports.getMonth = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);

        if (!user) {
            res.status(402).json({
                success: false,
                "message": "user not found"
            })
            return
        }

        const month = req.params.month;

        const expensesForMonth = await user.expenses.filter(expense => expense.startsWith(month));
        expensesForMonth.sort();

        res.status(200).json({
            success: true,
            expensesForMonth: expensesForMonth.sort()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            "Message": "Error in fetching Data"
        })
    }
}

exports.getTotal = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        let totalIn = 0;
        let totalOut = 0;
        if (!user) {
            res.status(402).json({
                success: false,
                "message": "user not found"
            })
            return
        }

        const month = req.params.month;

        const expensesForMonth = await user.expenses.filter(expense => expense.startsWith(month));

        for (let data of expensesForMonth) {
            const arr = data.split('_');
            totalIn += Number(arr[2]);
            totalOut += Number(arr[3])
        }
        res.status(200).json({
            totalIn: totalIn,
            totalOut: totalOut
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            "Message": "Error in fetching Data"
        })
    }
}

exports.getYear = async (req, res) => {
    //referenced 
    const user = await userModel.findById(req.params.id);
    const data = user.expenses;

    const combinedData = {};

    data.forEach(item => {
        const parts = item.split("_");
        const month = parts[0];
        const value1 = parseInt(parts[2]);
        const value2 = parseInt(parts[3]);

        if (combinedData[month]) {
            combinedData[month][0] += value1;
            combinedData[month][1] += value2;
        } else {
            combinedData[month] = [value1, value2];
        }
    });

    const formattedData = Object.fromEntries(Object.entries(combinedData).map(([key, value]) => [key, `${value[0]}_${value[1]}`]));

    res.status(200).json({
        success: true,
        data: formattedData
    })
}