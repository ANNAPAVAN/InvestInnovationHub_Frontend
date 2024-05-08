
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Student = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("IIH_email");
  console.log("my token ", token);

  const [postsData, setPostsData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getPosts`, {
          headers: {
            Authorization: token, 
            email
          }
        });
        console.log("-------*****////////-------",response.data.status);
        if(response.data.status=="failed"){
            alert("Invalid User");
            localStorage.removeItem("token");
            localStorage.removeItem("user_Id");
            navigate("/");
        }else{
            setPostsData(response.data);
        }
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  function handleButton(post){
    navigate("/studentsend", { state: { post } });
  }
  // const pendingProjects = investData.posts.filter(investment => investment.status === 'pending');

  const pendingPostsData = postsData.posts.filter(post => post.status === "pending");

  return ( 
    <>
    {/* <StudentNav/> */}
    <div className="student-container">
      <h1 className="student-heading">Projects</h1>

      {postsData.role === 'student' && (
        <div className="student-posts-container">
          {/* <h2 className="posts-heading">Posts:</h2> */}
          <ul className="student-project-list">
          {pendingPostsData.map((post) => (
              <li key={post.p_id} className="student-project-item">
                <div>
                  <h3>{post.p_title}</h3>
                  <p><strong>Project ID:</strong> {post.p_id}</p>
                  <p><strong>Entrepreneur ID:</strong> {post.e_id}</p>
                  <p><strong>Project Title:</strong> {post.p_title}</p>
                  <p><strong>Description:</strong> {post.p_desc}</p>
                  <button className="student-project-item-btn" onClick={() => handleButton(post)}>Submit</button>
                </div>
                {post.p_image && (
                  <div>
                    <img src={post.p_image} alt={post.p_title} className="student-project-image" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Student;

