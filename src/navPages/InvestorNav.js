import React from 'react';

function InvestorNav() { 
  return (
    <nav className="navbar">
      <a href="/investor" className="nav-link">Home</a><br></br>
      <a href="/investorpage" className="nav-link">InvestPost</a><br></br>
      <a href="/result" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a><br></br>

    </nav>
  );
}

export default InvestorNav;