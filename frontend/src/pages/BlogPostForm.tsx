import React, { useState } from 'react';

const BlogPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Submit blog post to the backend
    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
  };

  return (
    <div>
      <h1>Manage Blog Post</h1>
      <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
