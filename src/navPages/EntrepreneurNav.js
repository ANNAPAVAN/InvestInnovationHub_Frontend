import React from 'react';

function EntrepreneurNav() {
  return (
    <nav className="navbar">
      <a href="/entrepreneur" className="nav-link">Home</a>
      <a href="/entrepreneurpost" className="nav-link">Post</a>
      <a href="/entrepreneursend" className="nav-link">Send</a>
      <a href="/entrepreneurstudentresponse" className="nav-link">Responses</a>
      <a href="/entrepreneurresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a>
    </nav>
  );
}

export default EntrepreneurNav;
