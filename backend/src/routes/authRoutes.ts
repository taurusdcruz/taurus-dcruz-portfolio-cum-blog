import express from 'express';
import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import User from '../models/User';

const router = express.Router();

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID!,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
  callbackURL: "/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ linkedinId: profile.id });
    if (!user) {
      const newUser = new User({
        linkedinId: profile.id,
        email: profile.emails[0].value,
      });
      await newUser.save();
    }
    done(null, profile);
  } catch (error) {
    done(error);
  }
}));

router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

export default router;
