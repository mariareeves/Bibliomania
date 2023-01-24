const Book = require('../models/book');

module.exports = {
    index,
    new: newBook,
    create,
}

function index(req, res) {
    Book.find({}, function (err, books) {
        res.render('books/index', { title: 'See All Books', books })
    })
}

function newBook(req, res) {
    res.render('books/new', { title: 'Add a Book' });
}

function create(req, res) {
    const book = new Book(req.body)
    book.save(function (err) {
        if (err) return res.redirect('/books/new')
        console.log(book)
        res.redirect('/books')
    })
}

