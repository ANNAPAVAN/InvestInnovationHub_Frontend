import React from 'react';
import { Link } from 'react-router-dom';

function MyNav() {
  return (
    <nav className="navbar">

    <Link to="/" className="nav-link">LogOut</Link>

      {/* <a href="/" className="nav-link">LogOut</a> */}
    </nav>
  );
}

export default MyNav; 
  