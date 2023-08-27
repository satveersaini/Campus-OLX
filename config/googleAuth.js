const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../routes/registerModels");

passport.use(
  new GoogleStrategy(
    {
      clientID:
      "364638335929-c1cs3089eth7gf6i52g8g1khvqo6lick.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        {
          name: profile.displayName,
          email: profile.email,
          provider: "GOOGLE",
        },
        function (err, user) {
          return done(err, user);
        }
      );
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
