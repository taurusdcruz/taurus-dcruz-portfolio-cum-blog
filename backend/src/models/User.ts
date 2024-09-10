import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  linkedinId: String,
  twitterId: String,
  githubId: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

export default User;
