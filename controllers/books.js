const Book = require('../models/book');

module.exports = {
    new: newBook,
    create,
}


function newBook(req, res) {
    res.render('books/new', { title: 'Add a Book' });
}

function create(req, res) {
    console.log(req.body)
    const book = new Book(req.body)
    book.save(function (err) {
        if (err) return res.redirect('/books/new')
        console.log(book)
        res.redirect('/books/new')
    })
}