import React from 'react';
import { Link } from 'react-router-dom';


function StudentNav() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("user_Id");
  };
  return (
    <nav className="navbar">

    <Link to="/student" className="nav-link">Home</Link>
    <Link to="/studentpage" className="nav-link">Projects</Link>
    {/* <Link to="/studentsend" className="nav-link">Post Idea</Link> */}
    <Link to="/studentideas" className="nav-link">MyIdeas</Link>
    <Link to="/studentresult" className="nav-link">Results</Link> 
    <Link to="/studentprofile" className="nav-link">Profile</Link>
    <Link to="/" className="nav-link" onClick={handleLogout}>LogOut</Link>

      {/* <a href="/student" className="nav-link">Home</a>
      <a href="/studentpage" className="nav-link">Projects</a>
      <a href="/studentsend" className="nav-link">Post Idea</a>
      <a href="/studentresult" className="nav-link">Results</a>
      <a href="/" className="nav-link">LogOut</a> */}
    </nav>
  );
}

export default StudentNav; 