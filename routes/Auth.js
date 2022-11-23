const User = require("../models/User");
const passport = require('passport');
require('../utils/passport');
const router = require("express").Router();

const isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.sendStatus(401);
  }
}

router.get('/', passport.authenticate('google', { failureRedirect: '/error' }), 
 (req, res) => {
  res.send('Here you Home page!')
})

router.get('/error', (req, res) => {
  res.status(400).json({"error": "Internal error please contact developer"});
})

router.get('/good', isLoggedIn, (req, res) => {
  res.status(200).json(req?.user)
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/good');
  }
);

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})



module.exports = router;