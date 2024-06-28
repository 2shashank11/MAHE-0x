const mongoose = require('mongoose')
const MonthYear = require('./month');

const publicationSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    month: { type: MonthYear},
    
    bookName: { type: String, },
    type: { type: String, enum: ['Book', 'Chapter'],}, 
    isbn: { type: String, },
    publishYear: { type: Number, },
}, {timestamps: true} )

const Publication = mongoose.model('publication', publicationSchema);

module.exports = Publication;