import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

const Organization = () => {
    const { loading, data } = useQuery(QUERY_ORG);
    const orgs = data?.organization || [];

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
                        {orgs.map(organization => (
                            <div key={organization._id}>
                                <h3>{organization.name}</h3>
                                <p>{organization.location}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Organization;

