var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// New form for a review
// GET /books/:id/reviews/new
router.get('/:id/reviews/new', reviewsCtrl.new)
// Post /create/:id/reviews
router.post('/books/:id/reviews', reviewsCtrl.create)





module.exports = router;