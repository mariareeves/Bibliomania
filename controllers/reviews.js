const Book = require('../models/book');

module.exports = {
    new: newReview,
    create,
}


function create(req, res) {
    console.log('Testing controller')
    bookId = req.params.id
    req.body.book = bookId
    Book.create(req.body, function (err, review) {
        res.redirect(`/books/${bookId}`)
    })
}

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Review', bookId: req.params.id });
}

