import React from 'react';
import InvestorNav from '../navPages/InvestorNav';

function InvestorHome() {
  return (
    <>
      {/* <InvestorNav/> */}
      <div className="inv-home-container">
        <div className="inv-home-content">
          <h1 className="home-heading">Investor</h1> 
          <p>Welcome to InvestInnovationHub, where investment opportunities abound!</p>
          <p>As an investor, you have the chance to support innovative projects, contribute to their growth, and potentially profit from their success.</p>
          <p>Use this platform to explore a diverse range of projects across various industries, connect with promising entrepreneurs, and make informed investment decisions.</p>
          <p>InvestInnovationHub provides a platform for you to discover exciting opportunities, network with like-minded individuals, and make a positive impact on the future of innovation.</p>
          <p>Start your investment journey today by browsing through our curated projects and connecting with the entrepreneurs behind them!</p>
        </div>
      </div>
    </>
  );
}

export default InvestorHome;
