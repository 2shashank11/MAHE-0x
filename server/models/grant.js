const mongoose = require('mongoose')

const grantSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    
    periodFrom: { type: Date },
    periodTo: { type: Date }, 
    
    grantName: { type: String, },
    projectTitle: { type: String, },
    submitted: { type: String, enum: ['Yes', 'No'], }, 
    granted: { type: String, enum: ['Yes', 'No'], }, 
    amount: { type: Number, },
}, {timestamps: true} )

const Grant = mongoose.model('grant', grantSchema);

module.exports = Grant;