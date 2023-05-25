import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MATCH } from '../utils/queries';



export default function Match() {
    const {loading, error, data} = useQuery(QUERY_MATCH);
    const matches = data?.match || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-wrap justify-center align-center p-10">
           {matches.map((match) => (
                <BoxComponent 
                key={match._id}
                date={match.date}
                teamsPlaying={match.teamsPlaying}
                />
           ))}
        </div>
    )
}

const BoxComponent = ({ _id, date, teamsPlaying }) => {
    return (
        <div className="relative w-4/5 h-full flex flex-col border mb-2.5 p-2.5 border-solid border-[#ccc]">
          <span></span>
          <div className="content">
            
            <h2>Match #:</h2> 
            <h3>Date:{date}</h3>
            <h4>Teams Playing:{teamsPlaying}</h4>
            <h4>Result:{}</h4>
                    
          </div>
        </div>
      );
}