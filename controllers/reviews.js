const Book = require('../models/book');

module.exports = {
    new: newReview,
    create,
    delete: deleteReview,
    edit,
    update,
}


function create(req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            console.log("There's an error", err);
            res.redirect("/books");
        } else {
            console.log(req.user._id)
            req.body.user = req.user._id
            req.body.userName = req.user.name
            req.body.userAvatar = req.user.avatar

            book.reviews.push(req.body)
            book.save(function (err) {
                console.log(book.reviews[0].content)
                res.redirect(`/books/${req.params.id}`)
            });
        }
    });
}

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Review', bookId: req.params.id });
}

function deleteReview(req, res) {
    console.log('testing')
    Book.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id },
        function (err, book) {
            console.log(err)
            if (!book || err) return res.redirect(`/books/${book._id}`)
            book.reviews.remove(req.params.id)
            book.save(function (err) {
                res.redirect(`/books/${book._id}`)
            })
        })
}

function edit(req, res) {

    res.render('reviews/edit', { title: 'Edit Review', reviewId: req.params.reviewId, bookId: req.params.bookId })
}

function update(req, res) {
    console.log('something', req.params.bookId, req.params.reviewId)
    Book.findOne({ 'reviews._id': req.params.reviewId }, function (err, book) {
        console.log(book)
        const reviewSubdoc = book.reviews.id(req.params.reviewId)

        if (!reviewSubdoc.user) return res.redirect(`/books/${book._id}`)
        reviewSubdoc.content = req.body.content
        book.save(function (err) {
            res.redirect(`/books/${book._id}`)
        })
    })
}