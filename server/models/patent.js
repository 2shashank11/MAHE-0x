const mongoose = require('mongoose')

const patentSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    period: { type: Date, },
    
    title: { type: String, },
    filed: { type: String, enum: ['Yes', 'No'], }, 
    published: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
    region: { type: String, enum: ['Indian', 'Other Country'], }, 
    country: { type: String, },
}, {timestamps: true} )

const Patent = mongoose.model('patent', patentSchema)

module.exports = Patent