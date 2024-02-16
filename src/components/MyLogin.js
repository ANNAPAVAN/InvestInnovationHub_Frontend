import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
          navigate('/studentpage');
        }else if(response.data.role == 'entrepreneur'){
          console.log(response.data.role);
          navigate('/entrepreneurpage')
        }else{
          console.log(response.data.role);
          navigate('/investorpage');
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
    <div>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>LOGIN FORM</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input type="text" name="id" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>UserName</td>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="pwd" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input type="text" name="role" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Login" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <a href="/myreg">if u not registered</a>
    </div>
  );
};

export default MyLogin;
