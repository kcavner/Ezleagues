import React, { useState } from 'react';
import Auth from '../utils/auth'
import Organization from './Organization';
import Sports from "./Sports";
import Teams from "./Teams";
import Match from "./Match";

function Home() {
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
    const renderPage = () => {
      if (currentPage === 'Organization'){
        return <Organization />
    }
    if (currentPage === 'Sports'){
        return <Sports />;
    }
    if (currentPage === 'Teams'){
        return <Teams />;
    }
    if (currentPage === 'Match'){
        return <Match />
    }
    }
    return   <div className='home-dash-container'>
    <div className='home-dash'>
<button className='home-button' onClick={() => handlePageChange('Organization')}>Organizations</button>

<button className='home-button' onClick={() => handlePageChange('Sports')}>Sports</button>

<button className='home-button' onClick={() => handlePageChange('Teams')}>Get Teams</button>

<button className='home-button' onClick={() => handlePageChange('Match')}>Get Matches</button>

<button className='home-button'>Get Users</button>
{renderPage()}
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