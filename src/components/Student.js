import React, { useEffect, useState } from 'react';
import StudentNav from '../navPages/StudentNav';

const Student = () => {
  const [postsData, setPostsData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    fetch("http://localhost:2022/getPosts")
      .then((res) => res.json())
      .then((jsonRes) => setPostsData(jsonRes));
  }, []);

  return ( 
    <>
    <StudentNav/>
    <div className="student-container">
      <h1 className="student-heading">STUDENT PAGE</h1>

      {postsData.role === 'student' && (
        <div className="posts-container">
          <h2 className="posts-heading">Posts:</h2>
          <table className="posts-table" border="1">
            <thead>
              <tr>
                <th>Title</th>
                <th>Project Id</th>
                <th>Entrepreneur Id</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {postsData.posts.map((post) => (
                <tr key={post.p_id}>
                  <td>{post.p_title}</td>
                  <td>{post.p_id}</td>
                  <td>{post.e_id}</td>
                  <td>{post.p_desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

export default Student;
