import React from 'react';

function StudentNav() {
  return (
    <nav className="navbar">
      <a href="/student" className="nav-link">Home</a><br></br>
      <a href="/studentpage" className="nav-link">Student</a><br></br>
      <a href="/studentsend" className="nav-link">Student Response</a><br></br>
      <a href="/result" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a><br></br>
    </nav>
  );
}

export default StudentNav;