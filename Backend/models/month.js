const mongoose = require('mongoose')

const MonthYear = mongoose.Schema({
    month: { type: String, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],}, 
    year: { type: Number, },
})

module.exports = MonthYear;