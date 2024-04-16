import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css';
import Header from "./Pages/Homepage/Header";

const Admin = ({ isAdmin, setIsAdmin }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
      fetch("/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }).then(response => { 
        if (response.status === 200) {
          setIsAdmin(true);
          console.log("Admin access granted!");
          navigate("/allQuizzes")
        } else {
          // Password is incorrect, handle the error
          console.log("Incorrect password");
          // Clear the input field after submission
          setPassword("");
        }
         
      });

      
    
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
    <Header />
      <h1 className="adminText">Admin Login</h1>
      <form onSubmit={handleSubmit} className="adminForm">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChange}
            required
            className="adminInput"
          />
        </label>
        <button type="submit" className="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default Admin;
