
import React, { useEffect, useState } from 'react';

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getStudents`)
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  return (
    <div className="cards-top-container">
      <h1 className="result-title">Students</h1>
      <div className="card-div1">
        <div>
        <p className="card-para">
          <li><strong>Hands-On Learning:</strong> Gain practical experience beyond the classroom.</li>
          <li><strong>Networking:</strong> Connect with professionals for future opportunities.</li>
          <li><strong>Expert Insights:</strong> Learn from experienced entrepreneurs and investors.</li>
          <li><strong>Innovation:</strong> Contribute fresh ideas and perspectives to the project.</li>
          <li><strong>Portfolio Building:</strong> Showcase real-world achievements to future employers.</li>
          <li><strong>Entrepreneurial Mindset:</strong> Develop critical thinking and risk-taking skills.</li>
          <li><strong>Financial Opportunities:</strong> Potential for profit-sharing or equity stakes.</li>
          <li><strong>Impactful Work:</strong> Make a real difference with your contributions.</li>
          <li><strong>Access to Resources:</strong> Gain access to funding, mentorship, and industry connections.</li>
          <li><strong>Personal Growth:</strong> Enhance leadership, communication, and teamwork skills.</li>
      </p>

        </div>

        <div  className='card-div2'>
          <img src="https://purepng.com/public/uploads/large/purepng.com-studentsstudentcollege-studentschool-studentstudentsmale-female-1421526924207tlhco.png" alt="image1" id="pic1"/>
        </div>
    </div>

      <div className="card-container">
        {students.map((student, index) => (
          <div key={index} className="sample-card">
            {/* <img src={student.image} alt={`Image of ${student.name}`} className="sample-image" /> */}
            {student.image ? (
              <img src={student.image} alt={`Image of ${student.name}`} className="sample-image" />
            ) : (
              <img src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" alt={`Default Image`} className="sample-image" />
            )}
            <div className="sample-details">
              <p><strong>Student ID:</strong> {student.id}</p>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;


