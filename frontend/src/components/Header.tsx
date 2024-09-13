import React, { useState, useRef, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin'; // Assuming SocialLogin.tsx is in the same directory

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="header" ref={headerRef}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isExpanded ? 'Close' : 'Menu'}
      </button>
      <nav className={`nav ${isExpanded ? 'expanded' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <div className="social-login">
        <SocialLogin />
      </div>
    </header>
  );
};

export default Header;