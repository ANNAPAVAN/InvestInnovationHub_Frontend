import React from 'react';
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/allstudents" className="nav-link">Students</Link>
      <Link to="/allentrepreneurs" className="nav-link">Entrepreneurs</Link>
      <Link to="/allinvestors" className="nav-link">Investors</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>


     
      

    </nav>
  );
}

export default HomeNav;