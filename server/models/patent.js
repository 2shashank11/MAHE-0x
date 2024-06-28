const mongoose = require('mongoose')
const MonthYear = require('./month');

const patentSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    month: { type: MonthYear},
    
    filed: { type: String, enum: ['Yes', 'No'], }, 
    published: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
    region: { type: String, enum: ['Indian', 'Other Country'], }, 
    country: { type: String, },
}, {timestamps: true} )

const Patent = mongoose.model('patent', patentSchema)

module.exports = Patent