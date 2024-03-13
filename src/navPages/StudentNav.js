import React from 'react';
import { Link } from 'react-router-dom';


function StudentNav() {
  return (
    <nav className="navbar">

    <Link to="/student" className="nav-link">Home</Link>
    <Link to="/studentpage" className="nav-link">Projects</Link>
    <Link to="/studentsend" className="nav-link">Post Idea</Link>
    <Link to="/studentresult" className="nav-link">Results</Link>
    <Link to="/studentprofile" className="nav-link">Profile</Link>
    <Link to="/" className="nav-link">LogOut</Link>

      {/* <a href="/student" className="nav-link">Home</a>
      <a href="/studentpage" className="nav-link">Projects</a>
      <a href="/studentsend" className="nav-link">Post Idea</a>
      <a href="/studentresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a> */}
    </nav>
  );
}

export default StudentNav; 