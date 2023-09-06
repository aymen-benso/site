import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './img/logo.jpeg';

function Navbar() {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <nav>
        <ul className="menu">
          <li className="logo"><img src={logo} width="120px" alt="Logo" /></li>
          <li className="item">
            <Link to="/store">Store</Link>
          </li>
          <li className="item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="item">
            <Link to="/services">Services</Link>
          </li>
          <li className="item">
            <Link to="/free">Free</Link>
          </li>
          <li className="item button">
            <Link to="/account">
              Guest
            </Link>
          </li>
          <li className="toggle" onClick={toggleItems}>
            <span className="bars"></span>
          </li>
        </ul>
        {showItems && (
          <ul className="menu-items">
            <div className="button" onClick={toggleItems}>X</div>
            <li className="item2">
              <Link to="/store">Store</Link>
            </li>
            <li className="item2">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="item2">
              <Link to="/services">Services</Link>
            </li>
            <li className="item2">
              <Link to="/free">Free</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;