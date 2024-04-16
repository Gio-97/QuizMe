import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'; // Import CSS file for styling

const Header = () => {
  const navigate = useNavigate();
  const handleNavHome = () => {
    navigate("/");
  }

  return (
    <div onClick= {handleNavHome} className='container'>
      <h1 className='title'>QuizMe</h1>
    </div>


  );
}

export default Header;
