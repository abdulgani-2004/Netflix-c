import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../navbar/Navbar';
import Fetured from '../../fetured/Fetured';
import List from '../../list/List';
import './home.scss';

function Home() {
  const navigate = useNavigate(); 


  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div className='home'>
      <Navbar />
      <Fetured />
      <List />
      <List />
      <List />
      <List />
      <button onClick={handleLoginClick}>Go to Login</button>  
    </div>
  );
}

export default Home;
