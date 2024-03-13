// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import HomeNav from './HomeNav';

// const MyReg = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     pwd: '',
//     role: 'student',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND}/register`, formData);
//       // console.log(response.data.status);
//       if (response.data.status === 'success') {
//         alert('Registration successful');
//         navigate('/');
//       } else {
//         alert('Registration Failure');
//       }
//     } catch (error) {
//       // console.error('Error during registration:', error);
//       alert('Registration Failure');
//     }
//   };

//   return (
//     <>
//     {/* <HomeNav/> */}
//     <div className="registration-container">
//       <h1 className="registration-heading">REGISTRATION FORM</h1>
//       <form onSubmit={handleSubmit} className="registration-form">
//         <table className="registration-table">
//           <tbody>
//             <tr>
//               <td>User Id</td>
//               <td>
//                 <input type="text" name="id" onChange={handleChange} className="registration-input" />
//               </td>
//             </tr>
//             <tr>
//               <td>UserName</td>
//               <td>
//                 <input type="text" name="name" onChange={handleChange} className="registration-input" />
//               </td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>
//                 <input type="text" name="email" onChange={handleChange} className="registration-input" />
//               </td>
//             </tr>
//             <tr>
//               <td>Password</td>
//               <td>
//                 <input type="password" name="pwd" onChange={handleChange} className="registration-input" />
//               </td>
//             </tr>
//             <tr>
//                 <td>Role</td>
//                 <td>
//                   <select name="role" onChange={handleChange} value={formData.role} className="registration-input">
//                     <option value="student">Student</option>
//                     <option value="entrepreneur">Entrepreneur</option>
//                     <option value="investor">Investor</option>
//                   </select>
//                 </td>
//               </tr>
//             <tr>
//               <td colSpan="2">
//                 <input type="submit" value="Register" className="registration-submit-btn" />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//     </>
//   );
// };

// export default MyReg;


// --------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';

// function MyReg() {
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     pwd: '',
//     role: 'student',
//     image: '',
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setFormData((prevData) => ({
//         ...prevData,
//         image: reader.result,
//       }));
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND}/register`, formData);
//       if (response.data.status === 'success') {
//         alert('Registration successful');
//         // Redirect or perform other actions upon successful registration
//       } else {
//         alert('Registration Failure');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Registration Failure');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className="registration-container">
//         <h1 className="registration-heading">REGISTRATION FORM</h1>
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <input type="text" required name="id" value={formData.id} onChange={handleChange} />
//               <div className="registration-underline"></div>
//               <label htmlFor="id">User Id</label>
//             </div>
//           </div>

//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <input type="text" required name="name" value={formData.name} onChange={handleChange} />
//               <div className="registration-underline"></div>
//               <label htmlFor="name">UserName</label>
//             </div>
//           </div>

//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <input type="text" required name="email" value={formData.email} onChange={handleChange} />
//               <div className="registration-underline"></div>
//               <label htmlFor="email">Email</label>
//             </div>
//           </div>

//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <input type="password" required name="pwd" value={formData.pwd} onChange={handleChange} />
//               <div className="registration-underline"></div>
//               <label htmlFor="pwd">Password</label>
//             </div>
//           </div>

//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />
//               <img src={formData.image} alt="Preview" className="registration-preview-image" />
//             </div>
//           </div>

//           <div className="registration-input-row">
//             <div className="registration-input-data">
//               <select name="role" onChange={handleChange} value={formData.role}>
//                 <option value="student">Student</option>
//                 <option value="entrepreneur">Entrepreneur</option>
//                 <option value="investor">Investor</option>
//               </select>
//             </div>
//           </div>

//           <div className="registration-input-row registration-submit-btn">
//             <div className="registration-input-data">
//               <div className="registration-inner"></div>
//               <input type="submit" value="Register" />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default MyReg;



import React, { useState } from 'react';
import axios from 'axios';

function MyReg() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    pwd: '',
    role: 'student',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/register`, formData);
      // console.log("anna pavan");
      if (response.data.status === 'success') {
        alert('Registration successful');
        // Redirect or perform other actions upon successful registration
      } else {
        alert('Registration Failure');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration Failure');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* <HomeNav/> */}
      <div className="registration-container">
        <h1 className="registration-heading">REGISTRATION FORM</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <table className="registration-table">
            <tbody>
              <tr>
                <td>User Id</td>
                <td>
                  <input type="text" name="id" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>UserName</td>
                <td>
                  <input type="text" name="name" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" name="email" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="password" name="pwd" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
                  <img src={formData.image} alt="" className="registration-preview-image" />
                </td>
              </tr>
              <tr>
                <td>Role</td>
                <td>
                  <select name="role" onChange={handleChange} value={formData.role} className="registration-input">
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" value="Register" className="registration-submit-btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default MyReg;
