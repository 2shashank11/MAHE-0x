const mongoose = require('mongoose')
const MonthYear = require('./month');

const conferenceSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    period: { type: MonthYear },
    
    conferenceName: { type: String, }, 
    paperTitle: { type: String, },
    region: { type: String, enum: ['National', 'International'], }, 
    indexed: { type: String, enum: ['Yes', 'No'], }, 
}, {timestamps: true})

const Conference =  mongoose.model('conference', conferenceSchema);

module.exports = Conference;
