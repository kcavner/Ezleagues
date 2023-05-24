import React, { useState } from 'react';
import Auth from '../utils/auth'

function Home() {
  
if (Auth.loggedIn() === true){
  const user = Auth.getUser();
  console.log(user)
  if (user.isCommissioner === true) {
    // Render content for commissioner
    return <div className='home-dash'>

      </div>;
  } else if (user.isPlayer === true) {
    // Render content for player
    return <div className='home-dash'>
<button className='home-button' onclick="fetchData('organization')">Get Organizations</button>

<button className='home-button' onclick="fetchData('sport')">Get Sports</button>

<button className='home-button' onclick="fetchData('team')">Get Teams</button>

<button className='home-button' onclick="fetchData('match')">Get Matches</button>

<button className='home-button' onclick="fetchData('user')">Get Users</button>
      </div>;
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