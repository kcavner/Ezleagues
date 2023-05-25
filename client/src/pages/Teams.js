import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TEAM } from '../utils/queries';



export default function Teams() {
    const {loading, error, data} = useQuery(QUERY_TEAM, {
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
        fields:['team', 'team.roster', 'team.roster.firstName'],
    });
    const teams = data?.team || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-wrap justify-center align-center p-10">
            {console.log(teams)}
            {teams.map(team => (
            <BoxComponent
                key={team.name}
                name={team.name}
                roster={team.roster}
                data={data}
            />
            ))}
        </div>
    )
}

const BoxComponent = ({ name, roster, data }) => {

    const getPlayerName = (userId) => {
        const user = data?.team?.roster.find(user => user._id === userId);
        return user ? `${user.firstName} ${user.lastName}` : '';

    };
    return (
        <div className="position relative w-80 h-100
        flex border mb-2.5 p-2.5 border-solid border-[#ccc]">
          <span></span>
          <div className="content m-4">
            <h2>Team Name:{name}</h2> 
            <h3>Roster:{roster}</h3>
            <ul>
                {roster.map((userId) =>(
                    <li key={userId}>{getPlayerName(userId)}</li>
                ))}
            </ul>
            <button>Details</button>
          </div>
        </div>
      );
}