// Routes /books.js

var express = require('express');
var router = express.Router();
//Require the controller that exports books CRUD functions
const booksCtrl = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const book = require('../models/book');
const books = require('../controllers/books');

// All actual paths begin with '/books'
// Get /books
router.get('/', booksCtrl.index);
// Search for books
router.get('/searchBooks', ensureLoggedIn, booksCtrl.searchBooks);
// GET /books/new
router.get('/new', ensureLoggedIn, booksCtrl.new);
// Get /books/:id
router.get('/:id', booksCtrl.show);
// POST /books
router.post('/', ensureLoggedIn, booksCtrl.create);


module.exports = router;
