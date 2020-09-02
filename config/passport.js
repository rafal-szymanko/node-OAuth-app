const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()


passport.use(new GoogleStrategy({
    clientID: '342698220827-k84fgj9nh09u22toqbsditg102ge6ddf.apps.googleusercontent.com',
    clientSecret: 'B6qNWif26u7kD4HbZvk_CpM7',
    callbackURL: 'http://localhost:8000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});