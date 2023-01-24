// Routes /books.js

var express = require('express');
var router = express.Router();

//Require the controller that exports books CRUD functions
const booksCtrl = require('../controllers/books');

// All actual paths begin with '/books'
// Get /books
router.get('/', booksCtrl.index);
// GET /books/new
router.get('/new', booksCtrl.new);
// Get /books/:id
router.get('/:id', booksCtrl.show);
// POST /books
router.post('/', booksCtrl.create);

module.exports = router;
