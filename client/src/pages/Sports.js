import React from 'react';

export default function Sports() {
    return (
        <div className="flex flex-wrap justify-center align-center p-10">
            {/* would need to query sports and display as many BoxComponents as we have sports. */}
            <BoxComponent
                title="Basketball"
                content="5v5 Indoor Co-Ed League"
                startDate="2023-05-30"
            />
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