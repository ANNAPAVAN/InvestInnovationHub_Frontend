
import React, { useEffect, useState } from 'react';

const Student = () => {
  const [postsData, setPostsData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getPosts`)
      .then((res) => res.json())
      .then((jsonRes) => setPostsData(jsonRes));
  }, []);

  return ( 
    <>
    {/* <StudentNav/> */}
    <div className="student-container">
      <h1 className="student-heading">Projects</h1>

      {postsData.role === 'student' && (
        <div className="student-posts-container">
          {/* <h2 className="posts-heading">Posts:</h2> */}
          <ul className="student-project-list">
            {postsData.posts.map((post) => (
              <li key={post.p_id} className="student-project-item">
                <h3>{post.p_title}</h3>
                <p><strong>Project ID:</strong> {post.p_id}</p>
                <p><strong>Entrepreneur ID:</strong> {post.e_id}</p>
                <p><strong>Description:</strong> {post.p_desc}</p>
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

