

// import React, { useEffect, useState } from 'react';

// const AllStudents = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BACKEND}/getStudents`)
//       .then(response => response.json())
//       .then(data => setStudents(data.students))
//       .catch(error => console.error('Error fetching results:', error));
//   }, []);

//   return (
//     <>
//     <div className="result-container">
//       <h1 className="result-title">Students</h1>
//       <table className="result-table">
//         <thead>
//           <tr>
//             <th className="result-th">Student ID</th>
//             <th className="result-th">Student Name</th>
//             <th className="result-th">Email</th>
//             <th className="result-th">Image</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index} className="result-tr">
//               <td className="result-td">{student.id}</td>
//               <td className="result-td">{student.name}</td>
//               <td className="result-td">{student.email}</td>
//               <td className="result-td">
//                 {student.image && <img src={student.image} alt={`Image of ${student.name}`} className="student-image" />} 
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default AllStudents;


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
      <div className="card-container">
        {students.map((student, index) => (
          <div key={index} className="sample-card">
            <img src={student.image} alt={`Image of ${student.name}`} className="sample-image" />
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


