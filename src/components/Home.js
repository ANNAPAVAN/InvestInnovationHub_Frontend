import React from 'react';
import {useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import ResBody from './ResBody';
import Footer from './Footer';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
      const fetchTokenData = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.log("Token not found in local storage");
            return;
          }
          console.log(token);
          const response2 = await axios.get(`${process.env.REACT_APP_BACKEND}/getTokenDetails?token=${token}`);
          console.log("myjwt Details(from token) id and role---> ", response2.data);
          if(response2.data.length==0){
            throw new Error("Response data is empty");
          }

          let str = response2.data.split(" ");

          const myuser_id = localStorage.getItem("user_Id");
          console.log("--",myuser_id,"---",str[0],"---",str[1])
          if (str[0] === myuser_id) {
            navigate(`/${str[1]}`);
            return;
          }else{
            alert("Invalid User");
            localStorage.removeItem("token");
            localStorage.removeItem("user_Id");
            navigate("/");
            return;
          }
    
    
        } catch (error) {
          console.log(error);
            alert("Session TimeOut Please ReLogin again!!..");
            localStorage.removeItem("token");
            localStorage.removeItem("user_Id");
            navigate("/");
        }
      };
    
      fetchTokenData();
    }, [navigate]);
    
  // console.log(process.env.REACT_APP_BACKEND);
  const location = useLocation();
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    // if (location.pathname === '/') {
    //   localStorage.removeItem("token");
    // }
    const text = "JOIN US NOW !!";

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [location.pathname]);

  
  return ( 
    <>


    <div className="home-para1">
        <div>
        <h1 className="hp">Empowering Students, Entrepreneurs, and Investors Together <br></br>
          <span className='sp'>{displayText}</span>
           </h1>

           <p>Our mission is to create a vibrant ecosystem where students and entrepreneurs work hand in hand, leveraging each other's strengths and expertise to drive positive change and innovation. Together, we strive to build a future where creativity, passion, and entrepreneurship flourish, making a meaningful impact on society and the world.</p>
        </div>
        <div>
          <img src="https://content.presentermedia.com/content/animsp/00007000/7148/airplane_passenger_ride_md_nwm_v2.gif" alt="image1" id="pic"/>
        </div>
    </div>

    <div className="home-para2">
        <div>
          <h1 className="hp1">Student</h1>
          <p>
          <strong>Curious Learners:</strong> Students are naturally curious and eager to explore new opportunities.<br></br>

          <strong>Tech-Savvy:</strong> Growing up in the digital age, students are comfortable with technology and digital tools.<br></br>

          <strong>Creative Thinkers:</strong> Many students possess creative thinking skills, enabling them to come up with innovative solutions.<br></br>

          <strong>Collaborative:</strong> Students are accustomed to working in teams and can collaborate effectively with others.<br></br>

          <strong>Ambitious:</strong> Driven by ambition, students are eager to make a positive impact in their chosen field.<br></br>
          </p>
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/wp4385871.jpg" alt="image1" id="pic"/>
        </div>
    </div>

    <div className="home-para3">
        <div>
          <img src="https://www.aag-accountants.co.uk/wp-content/uploads/2020/02/What-Is-An-Entrepreneur_Image.jpg" alt="image1" id="pic"/>
        </div>
        <div>
          <h1 className="hp1">Entrepreneur</h1>
          <p>
            <strong>Visionary Leaders:</strong> Entrepreneurs possess a vision for the future and are committed to realizing their goals.<br></br>
            <strong>Resourceful:</strong> Entrepreneurs are resourceful problem-solvers, adept at finding solutions to challenges.<br></br>
            <strong>Risk-Takers:</strong> Many entrepreneurs are willing to take calculated risks to pursue their ventures and innovate.<br></br>
            <strong>Resilient:</strong> Entrepreneurs demonstrate resilience in the face of setbacks, persevering towards their objectives.<br></br>
            <strong>Networking:</strong> Entrepreneurs build extensive networks, leveraging connections for opportunities and growth.<br></br>
        </p>

        </div>
        
    </div>

    <div className="home-para2">
        <div>
          <h1 className="hp1">Investor</h1>
          <p>
            <strong>Strategic Investors:</strong> Investors have a strategic approach to allocating capital, seeking opportunities with potential for growth and returns.<br></br>
            <strong>Analytical Skills:</strong> Investors possess strong analytical skills, enabling them to evaluate investment opportunities and risks effectively.<br></br>
            <strong>Risk Management:</strong> Investors are adept at managing risk, balancing potential returns with the level of risk involved.<br></br>
            <strong>Networking:</strong> Investors cultivate extensive networks, connecting with other investors and industry professionals for insights and opportunities.<br></br>
            <strong>Impact Investors:</strong> Many investors are motivated by more than just financial returns, seeking opportunities to make a positive impact on society or the environment.<br></br>
        </p>
        </div>
        <div>
          <img src="https://fairmontequities.com/wp-content/uploads/successful-investor.jpg" alt="image1" id="pic"/>
        </div>
    </div>

    <div>
      <h1 className="hp2">JOIN US NOW !!</h1>
      <div className="home-para5">
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.j0Fl7k7INbKgr0ZEcTvDXQHaGW&pid=Api&P=0&h=180" alt="image1" id="pic1"/>
        </div>
        <div>
          <img src="https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-an-investor.jpg" alt="image1" id="pic1"/>
        </div>
      </div>
    </div>
{/* 
    <ResBody/>
   
    <img 
      src="https://d133th49upe1sl.cloudfront.net/images/theme/footer-animation.gif" 
      alt="image1" 
      style={{
        display: 'block',
        width: '100%',
        height: 'auto'
      }}
    /> */}
{/* <img src="https://www.thesmartbridge.com/images/innovativeprojects.jpg" alt="image1" id="pic"/> */}

<Footer/>
    </>
  );
}

export default Home;


// Encouraging, Motivating, Providing Opportunities, With Enhanced Resources, and Nurturing Growth.


// E - Encouraging
// M - Motivating
// P - Providing
// O - Opportunities
// W - With
// E - Enhanced
// R - Resources
// I - and
// N - Nurturing
// G - Growth