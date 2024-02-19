import React from 'react';
import InvestorNav from '../navPages/InvestorNav';

function InvestorHome() {
  return (
    <>
    <InvestorNav/>
    <div className="home-container">
      <h1>Welcome to Our Website</h1> 
      <p>This is a sample InvestorHome</p>
    </div>
    </>
  );
}

export default InvestorHome;
