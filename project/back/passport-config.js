const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { Users } = require("./models/users");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'headerbearer',
}

passport.use(
    new Strategy(options, async (payload, done) => {
        try {
            const user = await Users.findOne({ where: { id: payload.id } });

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);

module.exports = passport;