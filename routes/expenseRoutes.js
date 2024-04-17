const express = require('express'); 
const { addExpense, getMonth } = require('../controllers/expenseController')

const router = express.Router();

router.route("/add-data/:id").post(addExpense);
router.route("/get-data/:id").get(getMonth)

module.exports = router