const mongoose = require('mongoose')
const MonthYear = require('./month');

const grantSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    month: { type: MonthYear},
    
    grantName: { type: String, },
    submitted: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
    amount: { type: Number, },
}, {timestamps: true} )

const Grant = mongoose.model('grant', grantSchema);

module.exports = Grant;