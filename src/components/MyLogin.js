import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import HomeNav from './HomeNav';

const MyLogin = ({ onLogin }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    pwd: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(process.env.BACKEND)
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/login`, formData);
      // console.log(response.data.status);
      // console.log("Anna pavan login");
      
      if(response.data.status === 'success') {
        localStorage.setItem("token", "annapavan");
        alert('Login successful');
        if(response.data.role == 'student'){
          // console.log(response.data.role);
          onLogin(response.data.id);
          localStorage.setItem('user_Id', response.data.id);
          navigate('/student');
        }else if(response.data.role == 'entrepreneur'){
          onLogin(response.data.id);
          // console.log(response.data.id);
          // console.log(response.data.role);
          localStorage.setItem('user_Id', response.data.id);
          navigate('/entrepreneur')
        }else{
          onLogin(response.data.id);
          // console.log(response.data.role);
          localStorage.setItem('user_Id', response.data.id);
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

  // useEffect(() => {
  //   if (location.pathname === '/') 
  //   {
  //     localStorage.removeItem("token");
  //   }
  // }, []);

  return (
    <>
    <div className='logreg-background'>
    {/* <HomeNav/> */}
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
                  <select name="role" onChange={handleChange} value={formData.role} className="login-input">
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                  </select>
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
    </div>
    </>
  );
};

export default MyLogin;
