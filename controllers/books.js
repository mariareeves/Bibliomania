const Book = require('../models/book');

module.exports = {
    index,
    searchBooks,
    show,
    new: newBook,
    create,

}

//view all books

function index(req, res) {
    Book.find({}, function (err, books) {
        res.render('books/index', { title: 'See All Books', books })
    })
}

// show details of the book
function show(req, res) {
    Book.findById(req.params.id, function (err, book) {
        res.render('books/show', { title: 'Book Details', book })
    })

}

// receives a form to create a new book
function newBook(req, res) {
    res.render('books/new', { title: 'Add a Book' });
}

// creates a new book and add to the database
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


// search for a book
function searchBooks(req, res) {
    Book.find({ title: { $regex: new RegExp(req.query.bookTitle, 'i') } }, function (err, books) {
        res.render('books/index', {
            books,
            titleSearch: req.query.bookTitle
        });
    });
}