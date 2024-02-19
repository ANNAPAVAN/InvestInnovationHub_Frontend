import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import HomeNav from './HomeNav';

const MyLogin = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    pwd: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/login', formData);
      console.log(response.data.status);
      
      if(response.data.status === 'success') {
        localStorage.setItem("token", "annapavan");
        alert('Login successful');
        if(response.data.role == 'student'){
          console.log(response.data.role);
          navigate('/student');
        }else if(response.data.role == 'entrepreneur'){
          console.log(response.data.id);
          console.log(response.data.role);
          navigate('/entrepreneur')
        }else{
          console.log(response.data.role);
          navigate('/investor');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') 
    {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <>
    <HomeNav/>
    <div className="login-container">
      <h1 className="login-heading">LOGIN FORM</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <table className="login-table">
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input type="text" name="id" onChange={handleChange} className="login-input" />
              </td>
            </tr>
            <tr>
              <td>UserName</td>
              <td>
                <input type="text" name="name" onChange={handleChange} className="login-input" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="pwd" onChange={handleChange} className="login-input" />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input type="text" name="role" onChange={handleChange} className="login-input" placeholder='student/entrepreneur/investor'/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Login" className="login-submit-btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
};

export default MyLogin;
