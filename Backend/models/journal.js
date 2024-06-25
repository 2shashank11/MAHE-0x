const mongoose = require('mongoose')
const MonthYear = require('./month');

const journalSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    month: { type: MonthYear},
    
    title: { type: String, },
    journalName: { type: String, },
    quartile: { type: String, enum: ['Q1', 'Q2', 'Q3', 'Q4'], },
    wos: { type: String, enum: ['Yes', 'No'], }, 
    authorship: { type: String, enum: ['Author', 'Co-Author'], }, 
}, {timestamps: true} )

const Journal = mongoose.model('journal', journalSchema);

module.exports = Journal;