import React from 'react';
import { Link } from 'react-router-dom';

function EntrepreneurNav() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("user_Id");
  };

  
  return (
    <nav className="navbar">

    <Link to="/entrepreneur" className="nav-link">Home</Link>
    <Link to="/entrepreneurstudentresponse" className="nav-link">Responses</Link>
    <Link to="/entrepreneurprojects" className="nav-link">MyProjects</Link> 
    <Link to="/entrepreneurpost" className="nav-link">Post</Link>
    {/* <Link to="/entrepreneursend" className="nav-link">Send</Link> */}
    <Link to="/entrepreneurresult" className="nav-link">Results</Link>
    <Link to="/entrepreneurprofile" className="nav-link">Profile</Link>
    <Link to="/" className="nav-link" onClick={handleLogout} >LogOut</Link>
    </nav>
  );
}

export default EntrepreneurNav; 
