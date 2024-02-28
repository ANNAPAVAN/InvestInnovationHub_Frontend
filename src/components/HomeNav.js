import React from 'react';

function HomeNav() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">Home</a>
      <a href="/allstudents" className="nav-link">Students</a>
      <a href="/allentrepreneurs" className="nav-link">Entrepreneurs</a>
      <a href="/allinvestors" className="nav-link">Investors</a>
      <a href="/login" className="nav-link">Login</a>
      <a href="/register" className="nav-link">Register</a>
    </nav>
  );
}

export default HomeNav;