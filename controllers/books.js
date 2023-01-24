const Book = require('../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create,

}

function index(req, res) {
    Book.find({}, function (err, books) {
        res.render('books/index', { title: 'See All Books', books })
    })
}

function show(req, res) {
    Book.findById(req.params.id, function (err, book) {
        console.log(err)
        res.render('books/show', { title: 'Book Details', book })
    })

}

function newBook(req, res) {
    res.render('books/new', { title: 'Add a Book' });
}

function create(req, res) {
    const book = new Book(req.body)
    //Assin the logged in user's id
    book.userRecommending = req.user._id
    book.save(function (err) {
        if (err) return res.redirect('/books/new')
        console.log(book)
        res.redirect('/books')
    })
}

