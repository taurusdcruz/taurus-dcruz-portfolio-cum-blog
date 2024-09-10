import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Fetch blog post data
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLikes(data.likes);
      });
  }, [id]);

  const handleLike = () => {
    // Handle like action
    fetch(`/api/posts/${id}/like`, { method: 'POST' })
      .then(() => setLikes(likes + 1));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <FacebookShareButton url={window.location.href}>Share on Facebook</FacebookShareButton>
      <TwitterShareButton url={window.location.href}>Share on Twitter</TwitterShareButton>
      <LinkedinShareButton url={window.location.href}>Share on LinkedIn</LinkedinShareButton>
    </div>
  );
};

export default BlogPost;
