// import React, { useEffect, useState } from 'react';
// import ResultForm from './ResultForm';
// import InvestorNav from '../navPages/InvestorNav';

// const Investor = () => {
//   const [investData, setInvestData] = useState({
//     role: '',
//     posts: [],
//   });

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BACKEND}/getInvests`)
//       .then((res) => res.json())
//       .then((jsonRes) => setInvestData(jsonRes));
//   }, []);

//   return (
//     <>
//     <InvestorNav/>
//     <div className="investor-container">
//       <h1 className="investor-heading">Projects</h1>

//       {investData.role === 'investor' && (
//         <div className="investments-container">
//           {/* <h2 className="investments-heading">Investments</h2> */}
//           <table className="investments-table" border="1">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Project Id</th>
//                 <th>Entrepreneur Id</th>
//                 <th>Description</th>
//                 <th>Idea</th>
//                 <th>Requirements</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {investData.posts.map((investment, index) => (
//                 <tr key={index} className="investment-row">
//                   <td>{investment.title}</td>
//                   <td>{investment.pid}</td>
//                   <td>{investment.eid}</td>
//                   <td>{investment.desc}</td>
//                   <td>{investment.idea}</td>
//                   <td>{investment.req}</td>
//                   <td>{investment.amt}</td>
//                   <td>{investment.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <ResultForm/>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default Investor;


import React, { useEffect, useState } from 'react';
import InvestorNav from '../navPages/InvestorNav';
import ResultForm from './ResultForm';

const Investor = () => {
  const [investData, setInvestData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getInvests`)
      .then((res) => res.json())
      .then((jsonRes) => setInvestData(jsonRes));
  }, []);

  return (
    <>
      <InvestorNav />
      <div className="investor-container">
        <h1 className="investor-heading">Projects</h1>

        {investData.role === 'investor' && (
          <div className="investments-container">
            <div className="investor-project-cards">
              {investData.posts.map((investment, index) => (
                <div key={index} className="investor-project-card">
                  <h2>{investment.title}</h2>
                  <p><strong>Project Id:</strong> {investment.pid}</p>
                  <p><strong>Entrepreneur Id:</strong> {investment.eid}</p>
                  <p><strong>Description:</strong> {investment.desc}</p>
                  <p><strong>Idea:</strong> {investment.idea}</p>
                  <p><strong>Requirements:</strong> {investment.req}</p>
                  <p><strong>Amount:</strong> {investment.amt}</p>
                  <p><strong>Status:</strong> {investment.status}</p>
                </div>
              ))}
            </div>
            <ResultForm/>
          </div>
        )}
      </div>
    </>
  );
};

export default Investor;
