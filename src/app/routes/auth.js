const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorize = require('../middlewares/authorize');
const Users = () => require('../database/db')('users');

router.get('/login', authorize.isNotAuth, (_req, res, _next) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/error'
}));

router.get('/logout', (req, res, _next) => {
  req.session.destroy();
  res.redirect('/');
});

router.get('/register', authorize.isNotAuth, (_req, res, _next) => {
  res.render('register');
});

router.post('/register', authorize.isNotAuth, (req, res, next) => {
  Users().insert(req.body)
  .then((_) => {
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });

  }, next);
});

module.exports = router;