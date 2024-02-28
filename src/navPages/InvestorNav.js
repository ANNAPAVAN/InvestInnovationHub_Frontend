import React from 'react';

function InvestorNav() { 
  return (
    <nav className="navbar">
      <a href="/investor" className="nav-link">Home</a>
      <a href="/investorpage" className="nav-link">Projects</a>
      <a href="/investorresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a>

    </nav>
  );
}

export default InvestorNav;