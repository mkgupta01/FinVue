const express = require('express'); 
const { addYear } = require('../controllers/calendarController')

const router = express.Router();

router.route("/addyear/:id").put(addYear);


module.exports = router