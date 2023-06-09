import React, { useState } from 'react';
import Auth from '../utils/auth'
import Organization from './Organization';
import Sports from "./Sports";
import Teams from "./Teams";
import Match from "./Match";
import Login from './login';
import User from './User';

function Home() {
  const [currentPage, setCurrentPage] = useState('');
  const handlePageChange = (page) => setCurrentPage(page);

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
  if (currentPage === 'Login'){
      return <Login/>
  }
  if (currentPage === 'User'){
    return <User />
  }
  }


  if (Auth.loggedIn() === false){
    alert('please log in')
    return <Login/>
  }else{

  const user = Auth.getUser()


return <div className='home-dash-container'>
  
    <div className='home-dash'>
    <div className='welcome-name'>welcome, {user.data.userName}!</div>
<button className='home-button' onClick={() => handlePageChange('Organization')}>Organizations</button>

<button className='home-button' onClick={() => handlePageChange('Sports')}>Sports</button>

<button className='home-button' onClick={() => handlePageChange('Teams')}>Get Teams</button>

<button className='home-button' onClick={() => handlePageChange('Match')}>Get Matches</button>

<button className='home-button' onClick={() => handlePageChange('User')}>Get Users</button>
{renderPage()}
      </div>
    </div> 
}
}

  export default Home