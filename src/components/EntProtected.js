

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const EntProtected = ({ children }) => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const myuser_id = localStorage.getItem("user_Id");

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // console.log("Token not found in local storage"); 
          return;
        }

        const response2 = await axios.get(`${process.env.REACT_APP_BACKEND}/getTokenDetails?token=${token}`);
        console.log("myjwt Details(from token) id and role---> ", response2.data);

        if (response2.data.length === 0) {
          throw new Error("Response data is empty");
        }

        let str = response2.data.split(" ");
        // console.log("--", myuser_id, "---", str[0], "---", str[1]); 

        if (str[0] === myuser_id && str[1]=="entrepreneur") {
          // If user is valid, continue rendering children
        } else {
          alert("Invalid User");
          localStorage.removeItem("token");
          localStorage.removeItem("user_Id");
          // Redirect to home page
          navigate("/")
        }
      } catch (error) {
        alert("Session TimeOut Please ReLogin again!!..");
        localStorage.removeItem("token");
        localStorage.removeItem("user_Id");
        navigate("/")
      }
    };

    fetchTokenData();
  }, [myuser_id]);

  if (!localStorage.token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default EntProtected;
