
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
//       // console.log("anna pavan");
//       if (response.data.status === 'success') {
//         alert('Registration successful');
//         // Redirect or perform other actions upon successful registration
//       } else {
//         alert('Registration Failure');
//         console.log(response.data.errors.pwd);
//         console.log(response.data.errors.email);
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
//       {/* <HomeNav/> */}
//       <div className="registration-container">
//         <h1 className="registration-heading">REGISTRATION FORM</h1>
//         <form onSubmit={handleSubmit} className="registration-form">
//           <table className="registration-table">
//             <tbody>
//               <tr>
//                 <td>User Id</td>
//                 <td>
//                   <input type="text" name="id" onChange={handleChange} className="registration-input" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>UserName</td>
//                 <td>
//                   <input type="text" name="name" onChange={handleChange} className="registration-input" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>
//                   <input type="text" name="email" onChange={handleChange} className="registration-input" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Password</td>
//                 <td>
//                   <input type="password" name="pwd" onChange={handleChange} className="registration-input" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Image</td>
//                 <td>
//                   <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
//                   <img src={formData.image} alt="" className="registration-preview-image" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Role</td>
//                 <td>
//                   <select name="role" onChange={handleChange} value={formData.role} className="registration-input">
//                     <option value="student">Student</option>
//                     <option value="entrepreneur">Entrepreneur</option>
//                     <option value="investor">Investor</option>
//                   </select>
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan="2">
//                   <input type="submit" value="Register" className="registration-submit-btn" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </form>
//       </div>
//     </>
//   );
// }

// export default MyReg;


// ----------------------------------------------------------------------------------------------------------------------------------------


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

  const [errors, setErrors] = useState({});

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
      if (response.data.status === 'success') {
        alert('Registration successful');
        // Redirect or perform other actions upon successful registration
      } else {
        alert('Registration Failure');
        setErrors(response.data.errors); // Set errors state to display errors to the user
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
                  {errors.name && <span className="registration-error">{errors.name}</span>} 
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" name="email" onChange={handleChange} className="registration-input" />
                  {errors.email && <span className="registration-error">{errors.email}</span>} {/* Display email error */}
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="password" name="pwd" onChange={handleChange} className="registration-input" />
                  {errors.pwd && <span className="registration-error">{errors.pwd}</span>} 
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



