import express from 'express';
import Post from '../models/Post';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

router.post('/:id/like', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    post.likes += 1;
    await post.save();
    res.status(200).json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

export default router;
