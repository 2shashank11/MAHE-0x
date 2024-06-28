const mongoose = require('mongoose')
const MonthYear = require('./month');

const fellowshipSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    month: { type: MonthYear },
    
    fellowshipName: { type: String, },
    submitted: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
}, {timestamps: true} )

const Fellowship = mongoose.model('fellowship', fellowshipSchema)

module.exports = Fellowship