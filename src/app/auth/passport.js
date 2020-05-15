const db = require('../database/db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = () => db('users');

passport.use(new LocalStrategy((username, password, done) => {
    Users().where('username', username)
    .first()
    .then((user) => {
        if (!user || user.password !== password) {
            return done(null, false);
        }

        done(null, user);
    }, done)
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users().where('id', id)
    .first()
    .then((user) => {
        done(null, user);
    }, done)
});