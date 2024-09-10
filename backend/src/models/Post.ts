import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
