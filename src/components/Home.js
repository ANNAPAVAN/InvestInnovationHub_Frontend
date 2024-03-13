import React from 'react';
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
    <div className="home-background">
    <div className="home-container">
      <h1 className="home-heading">Invest Innovation Hub</h1>
      <p className="home-description">
      Welcome to InvestInnovationHub, your gateway to a thriving ecosystem of innovation and collaboration.
      <br />
      Our platform brings together entrepreneurs, students, and investors, providing a dynamic space for creativity and growth in project development.
      <br />
      Entrepreneurs are empowered to share their projects, seeking innovative solutions and partnerships to drive their vision forward.
      <br />
      Students, fueled by curiosity and ambition, contribute fresh ideas and perspectives, enriching projects with their creativity and enthusiasm.
      <br />
      Investors play a pivotal role in fueling the engine of innovation, providing vital resources and support to transform promising projects into reality.
      <br />
      Join us in shaping the future of innovation, where ideas flourish, collaborations thrive, and opportunities abound.
      </p>
    </div>

    <ResBody/>
    {/* <div style={{ position: 'relative' }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.Pw5CDVOiaKweLRyWrb2peQHaD6&pid=Api&P=0&h=180" alt="image" style={{ position: 'absolute', top: 0, right: 0 }} />
    </div> */}
</div>
    </>
  );
}

export default Home;
