import React from 'react';
import StudentNav from '../navPages/StudentNav';

function StudentHome() {
  return (
    <>
     {/* <StudentNav/> */}
    <div className="home-container">
      <h1 className="home-heading">Invest Innovation Hub</h1>
        <p>Welcome to InvestInnovationHub, the platform where innovation meets opportunity!</p>
        <p>As a student, you play a vital role in the ecosystem of InvestInnovationHub. Here, you can explore various projects posted by entrepreneurs and contribute your ideas to their development.</p>
        <p>Take advantage of this platform to gain real-world experience, collaborate with peers, and showcase your skills to potential employers and investors.</p>
        <p>Get started now by browsing through the available projects and submitting your innovative ideas!</p>
    </div>
    </>
  );
}

export default StudentHome; 
