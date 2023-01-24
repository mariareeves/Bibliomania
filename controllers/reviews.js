const Book = require('../models/book');

module.exports = {
    new: newReview,
    create,
}


// function create(req, res) {

//     console.log('Testing controller')
//     console.log(req.body)
//     console.log(req.body.content)
//     bookId = req.params.id
//     req.body.book = bookId
//     Book.create(req.body, function (err, review) {
//         res.redirect(`/books/${bookId}`)
//     })
// }

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

