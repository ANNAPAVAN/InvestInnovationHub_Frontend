import React, { useEffect, useState } from 'react';
import MyNav from './MyNav';

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
    <div>
      <MyNav />
      <h1>STUDENT PAGE</h1>

      {postsData.role === 'student' && (
        <div>
          <h2>Posts:</h2>
          <table border="1">
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
  );
};

export default Student;
