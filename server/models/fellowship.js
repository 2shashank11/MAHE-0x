const mongoose = require('mongoose')

const fellowshipSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    periodFrom: { type: Date },
    periodTo: { type: Date }, 

    fellowshipName: { type: String, },
    fellowshipAmount: { type: Number, },
    submitted: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
}, {timestamps: true} )

const Fellowship = mongoose.model('fellowship', fellowshipSchema)

module.exports = Fellowship