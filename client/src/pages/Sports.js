import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SPORT } from '../utils/queries';



export default function Sports() {
    const {loading, error, data} = useQuery(QUERY_SPORT);
    const sports = data?.sport || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-wrap justify-center align-center p-10">
            {sports.map(sport => (
            <BoxComponent
                key={sport.name}
                title={sport.name}
                content={sport.description}
                startDate={sport.startDate}
            />
            ))}
        </div>
    )
}

const BoxComponent = ({ title, description, startDate }) => {
    return (
        <div className="position relative w-80 h-100
        flex">
          <span></span>
          <div className="content">
            {/* sport name */}
            <h2>{title}</h2> 
            {/* sport desc */}
            <p>{description}</p>
            <p>{startDate}</p>
            <button>Details</button>
          </div>
        </div>
      );
}