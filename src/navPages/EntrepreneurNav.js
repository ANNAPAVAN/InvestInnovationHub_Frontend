import React from 'react';
import { Link } from 'react-router-dom';

function EntrepreneurNav() {
  return (
    <nav className="navbar">

    <Link to="/entrepreneur" className="nav-link">Home</Link>
    <Link to="/entrepreneurpost" className="nav-link">Post</Link>
    <Link to="/entrepreneursend" className="nav-link">Send</Link>
    <Link to="/entrepreneurstudentresponse" className="nav-link">Responses</Link>
    <Link to="/entrepreneurresult" className="nav-link">Results</Link>
    <Link to="/entrepreneurprofile" className="nav-link">Profile</Link>
    <Link to="/" className="nav-link">LogOut</Link>

      {/* <a href="/entrepreneur" className="nav-link">Home</a>
      <a href="/entrepreneurpost" className="nav-link">Post</a>
      <a href="/entrepreneursend" className="nav-link">Send</a>
      <a href="/entrepreneurstudentresponse" className="nav-link">Responses</a>
      <a href="/entrepreneurresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a> */}
    </nav>
  );
}

export default EntrepreneurNav; 
