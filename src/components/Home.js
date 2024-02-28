import React from 'react';
import HomeNav from './HomeNav';
import {useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResBody from './ResBody';

function Home() {
  // console.log(process.env.REACT_APP_BACKEND);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') 
    {
      localStorage.removeItem("token");
    }
  }, []);
  return ( 
    <>
    {/* <HomeNav/> */}
    <div className="home-container">
      <h1>Invest Innovation Hub</h1>
    </div>
    <ResBody/>
    </>
  );
}

export default Home;
