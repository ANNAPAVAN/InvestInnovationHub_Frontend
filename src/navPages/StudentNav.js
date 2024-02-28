import React from 'react';

function StudentNav() {
  return (
    <nav className="navbar">
      <a href="/student" className="nav-link">Home</a>
      <a href="/studentpage" className="nav-link">Projects</a>
      <a href="/studentsend" className="nav-link">Post Idea</a>
      <a href="/studentresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a>
    </nav>
  );
}

export default StudentNav;