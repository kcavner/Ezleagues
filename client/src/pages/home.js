import React, { useState } from 'react';


function Home() {

    return (
  <div className='home-dash'>

<button className='home-button' onclick="fetchData('organization')">Get Organizations</button>

<button className='home-button' onclick="fetchData('sport')">Get Sports</button>

<button className='home-button' onclick="fetchData('team')">Get Teams</button>

<button className='home-button' onclick="fetchData('match')">Get Matches</button>

<button className='home-button' onclick="fetchData('user')">Get Users</button>

<button className='home-button' onclick="createUser()">Create User</button>

<button className='home-button' onclick="login()">Login</button>

<button className='home-button' onclick="updateUser()">Update User</button>

<button className='home-button' onclick="deleteUser()">Delete User</button>

<button className='home-button' onclick="createOrg()">Create Organization</button>

<button className='home-button' onclick="updateOrg()">Update Organization</button>

<button className='home-button' onclick="deleteOrg()">Delete Organization</button>

<button className='home-button' onclick="createSport()">Create Sport</button>

<button className='home-button' onclick="updateSport()">Update Sport</button>

<button className='home-button' onclick="deleteSport()">Delete Sport</button>

<button className='home-button' onclick="createTeam()">Create Team</button>

<button className='home-button' onclick="updateTeam()">Update Team</button>

<button className='home-button' onclick="deleteTeam()">Delete Team</button>

<button className='home-button' onclick="createMatch()">Create Match</button>

<button className='home-button' onclick="updateMatch()">Update Match</button>

<button className='home-button' onclick="deleteMatch()">Delete Match</button>
   </div>
  );
}

  export default Home