// Necessary Import
import styled from "styled-components";
import React from 'react';

// Component and Other Import
import RecommendedSection from './RecommendedSection.js';


const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <RecommendedSection />
    </HomeContainer>
  );
}

export default Home;