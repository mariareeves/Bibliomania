var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// New form for a review
// GET /books/:id/reviews/new
router.get('/books/:id/reviews/new', ensureLoggedIn, reviewsCtrl.new)
// Post /books/:id/reviews
router.post('/books/:id/reviews', ensureLoggedIn, reviewsCtrl.create)
// Delete /reviews
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete)





module.exports = router;