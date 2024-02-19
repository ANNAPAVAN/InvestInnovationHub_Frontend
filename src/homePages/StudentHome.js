import React from 'react';
import StudentNav from '../navPages/StudentNav';

function StudentHome() {
  return (
    <>
     <StudentNav/>
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>This is a sample Student HOme</p>
    </div>
    </>
  );
}

export default StudentHome; 
