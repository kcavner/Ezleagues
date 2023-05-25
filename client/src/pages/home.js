import React, { useState } from 'react';
import Auth from '../utils/auth'
// import { Routes, Route, useNavigate } from 'react-router-dom';
import Organization from './Organization';

function Home() {
  // const navigate = useNavigate();
  // const navigateToOrgs = () => {
  //   navigate('/Organization');
  // };
  const [currentPage, setCurrentPage] = useState('');
  const handlePageChange = (page) => setCurrentPage(page);
if (Auth.loggedIn() === true){
  const user = Auth.getUser();
  console.log(user)
  if (user.isCommissioner === true) {
    // Render content for commissioner
    return <div className='home-dash'>

      </div>;
  } else if (user.data.isPlayer === true) {
    // Render content for player
    
    return   <div className='home-dash-container'>
    <div className='home-dash'>
<button className='home-button' onClick={() => handlePageChange('Organization')}>Organizations</button>

<button className='home-button' onClick={() => handlePageChange('Sports')}>Sports</button>

<button className='home-button' onClick={() => handlePageChange('Teams')}>Get Teams</button>

<button className='home-button'>Get Matches</button>

<button className='home-button'>Get Users</button>
{currentPage === 'Organization' && <Organization />}
      </div>
    </div>
  } else if (user.isCaptain === true) {
    // Render content for captain
    return <div className='home-dash'>

      </div>;
  } else if (user.isLeagueWorker === true) {
    // Render content for league worker
    return <div className='home-dash'>

      </div>;
  }
}else{
    return (<div>

    </div>
      
  );
}
}

  export default Home