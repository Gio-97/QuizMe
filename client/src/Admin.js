import React, { useEffect, useState } from "react";

const Admin = (adminState) => {

const {adminStateProp} = adminState
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();

    useEffect(() => {
        fetch("/admin")
        .then(response )

        if (response === 200) {
            setIsAdmin(true);
            console.log("Admin access granted!");
          } else {
            // Password is incorrect, handle the error
            console.log("Incorrect password");
          }
          // Clear the input field after submission
          setPassword("");
    })
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={handleChange} required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
