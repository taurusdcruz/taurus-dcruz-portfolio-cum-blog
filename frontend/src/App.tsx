import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Dashboard from './pages/Dashboard';
import BlogPostForm from './pages/BlogPostForm';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-blog" element={<BlogPostForm />} />
      </Routes>
    </Router>
  );
};

export default App;
