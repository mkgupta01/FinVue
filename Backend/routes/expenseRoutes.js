const express = require('express'); 
const { addExpense, getMonth, getTotal, getYear } = require('../controllers/expenseController');
const { isLoggedIn } = require('../middleware/authMiddleWare');

const router = express.Router();

router.route("/add-data/:id").post(addExpense);
router.route("/get-data/:id/:month").get(getMonth)
router.route("/get-total/:id/:month").get(getTotal)
router.route("/get-year/:id/").get(getYear)

module.exports = router