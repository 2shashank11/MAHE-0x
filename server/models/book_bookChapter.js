const mongoose = require('mongoose')

const book_bookChapterSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    period: { type: Date,},
    
    bookName: { type: String, },
    type: { type: String, enum: ['Book', 'Book-Chapter'],}, 
    isbn: { type: String, },
    publicationYear: { type: Number, },

}, {timestamps: true} )

const Book_BookChapter = mongoose.model('book_bookChapter', book_bookChapterSchema);

module.exports = Book_BookChapter;