// import React, { useEffect, useState } from 'react';

// const AllEntrepreneurs = () => {
//   const [entrepreneurs, setEntrepreneurs] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BACKEND}/getEntrepreneurs`)
//       .then(response => response.json())
//       .then(data => {
//         if (data && data.entrepreneurs) {
//           setEntrepreneurs(data.entrepreneurs);
//         } else {
//           throw new Error('Data format is incorrect');
//         }
//       })
//       .catch(error => console.error('Error fetching results:', error));
//   }, []);

//   return (
//     <>
//     <div className="result-container">
//       <h1 className="result-title">Entrepreneurs</h1>
//       <table className="result-table">
//         <thead>
//           <tr>
//             <th className="result-th">Entrepreneur ID</th>
//             <th className="result-th">Entrepreneur Name</th>
//             <th className="result-th">Email</th>
//             <th className="result-th">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entrepreneurs.map((entrepreneur, index) => (
//             <tr key={index} className="result-tr">
//               <td className="result-td">{entrepreneur.id}</td>
//               <td className="result-td">{entrepreneur.name}</td>
//               <td className="result-td">{entrepreneur.email}</td>
//               <td className="result-td">
//                 {entrepreneur.image && <img src={entrepreneur.image} alt={`Image of ${entrepreneur.name}`} className="entrepreneur-image" />} 
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default AllEntrepreneurs;




import React, { useEffect, useState } from 'react';

const AllEntrepreneurs = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getEntrepreneurs`)
      .then(response => response.json())
      .then(data => {
        if (data && data.entrepreneurs) {
          setEntrepreneurs(data.entrepreneurs);
        } else {
          throw new Error('Data format is incorrect');
        }
      })
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  return (
    <div className="cards-top-container">
      <h1 className="result-title">Entrepreneurs</h1>
      <div className="card-container">
        {entrepreneurs.map((entrepreneur, index) => (
          <div key={index} className="sample-card">
            <img src={entrepreneur.image} alt={`Image of ${entrepreneur.name}`} className="sample-image" />
            <div className="sample-details">
              <p><strong>Entrepreneur ID:</strong> {entrepreneur.id}</p>
              <p><strong>Name:</strong> {entrepreneur.name}</p>
              <p><strong>Email:</strong> {entrepreneur.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEntrepreneurs;
