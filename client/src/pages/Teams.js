import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEAM } from '../utils/queries';



export default function Teams() {
    const {loading, error, data} = useQuery(QUERY_TEAM);
    const teams = data?.team || [];
    console.log(teams)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-wrap justify-center align-center p-10">
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
        <div className="position relative w-80 h-100
        flex border mb-2.5 p-2.5 border-solid border-[#ccc]">
          <span></span>
          <div className="content m-4">
            {/* sport name */}
            <h2>Team Name:{name}</h2> 
            {/* sport desc */}
            <h3>Roster:{roster}</h3>
            <ul>
                {roster.map((playerId) =>(
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
            <button>Details</button>
          </div>
        </div>
      );
}