import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';

const Organization = () => {
    const { loading, data } = useQuery(QUERY_ORG);
    const orgs = data?.Organization || [];

    return (
        <main>
            <div>
                <h2>Organizations</h2>
                <p>Please select an organization to join</p>
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {orgs.map(orgs => (
                            <div key={orgs.id}>
                                <h3>{orgs.name}</h3>
                                <p>{orgs.location}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Organization;

