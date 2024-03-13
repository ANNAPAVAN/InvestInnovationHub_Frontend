import React from 'react';
import { Link } from 'react-router-dom';

function InvestorNav() { 
  return (
    <nav className="navbar">

    <Link to="/investor" className="nav-link">Home</Link>
    <Link to="/investorpage" className="nav-link">Projects</Link>
    <Link to="/investorresult" className="nav-link">Results</Link>
    <Link to="/investorprofile" className="nav-link">Profile</Link>
    <Link to="/" className="nav-link">LogOut</Link>

      {/* <a href="/investor" className="nav-link">Home</a>
      <a href="/investorpage" className="nav-link">Projects</a>
      <a href="/investorresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a> */}

    </nav>
  );
}

export default InvestorNav; 