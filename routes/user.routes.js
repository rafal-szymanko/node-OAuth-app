const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/logged', (req, res) => {

const {name, picture} = req.user._json
  res.render('logged', {name: name, picture: picture});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    console.log(req.user.id)
    if(req.user) {
        res.render('userProfile');
    }   else {
        res.redirect('/no-permission')
    }
  });

  router.get('/profile/settings', (req, res) => {
    if(req.user) {
        res.render('userSettings');
    }   else {
        res.redirect('/no-permission')
    }
  });

module.exports = router;