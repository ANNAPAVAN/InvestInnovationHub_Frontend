import React from 'react';

function EntrepreneurNav() {
  return (
    <nav className="navbar">
      <a href="/entrepreneur" className="nav-link">Home</a><br></br>
      <a href="/entrepreneurpost" className="nav-link">Entrepreneur Post</a><br></br>
      <a href="/entrepreneursend" className="nav-link">Entrepreneur Send</a><br></br>
      <a href="/studentresponse" className="nav-link">Response Ideas</a><br></br>
      <a href="/result" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a><br></br>
    </nav>
  );
}

export default EntrepreneurNav;
