const Book = require('../models/book');

module.exports = {
    new: newReview,
    create,
}

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add a Review' });
}

function create(req, res) {
    console.log('Testing controller')
    Book.findById(req.params.id, function (err, book) {
        console.log(err)
        book.reviews.push(req.body)
        book.save(function (err) {
            res.redirect(`/books/${book._id}`)
        })
    })
}