const mongoose = require('mongoose')

const MonthYear = mongoose.Schema({
    month: { type: String, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],}, 
    year: { type: Number, },
    date: { type: Date, }
})

MonthYear.pre('save', function(next){
    this.date = new Date(`${this.month} 1, ${this.year}`);
    next();
})

module.exports = MonthYear;