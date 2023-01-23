var express = require('express');
const { authenticate } = require('passport');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bibliomania' });
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', {
  scope: ['profile', 'email'],
  prompt: "select_account"
}
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});




module.exports = router;
