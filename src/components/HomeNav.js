import React from 'react';

function HomeNav() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">Home</a><br></br>
      <a href="/login" className="nav-link">Login</a><br></br>
      <a href="/register" className="nav-link">Register</a><br></br>
    </nav>
  );
}

export default HomeNav;