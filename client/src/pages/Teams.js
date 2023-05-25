import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEAM } from '../utils/queries';



export default function Teams() {
    const {loading, error, data} = useQuery(QUERY_TEAM);
    const teams = data?.team || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-col justify-center align-center p-10">
            {teams.map(team => (
            <BoxComponent
                key={team.name}
                name={team.name}
                roster={team.roster}
            />
            ))}
        </div>
    )
}

const BoxComponent = ({ name, roster }) => {
    return (
        <div className="relative w-4/5 h-full flex flex-col border mb-2.5 p-2.5 border-solid border-[#ccc]">
          <span></span>
          <div className="content m-4">
            {/* sport name */}
            <h2>Team Name:{name}</h2> 
            {/* sport desc */}
            <h3>Roster:</h3>
            <ul>
                {roster.map((playerId) =>(
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
            {/* <button>Details</button> */}
          </div>
        </div>
      );
}