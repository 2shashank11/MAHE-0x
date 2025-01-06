const mongoose = require('mongoose')
const MonthYear = require('./month');

const journalSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    period: { type: Date, },
    
    title: { type: String, },
    journalName: { type: String, },
    quartile: { type: String, enum: ['Q1', 'Q2', 'Q3', 'Q4'], },
    wos: { type: String, enum: ['Yes', 'No'], }, 
    authorship: { type: String, enum: ['Author', 'Co-Author', 'Corresponding-Author'], },  // one more Corresponding-Author
    doi: { type: String, },
}, {timestamps: true} )

const Journal = mongoose.model('journal', journalSchema);

module.exports = Journal;