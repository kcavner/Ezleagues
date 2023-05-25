import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Organization = () => {
    const { loading, data } = useQuery(QUERY_ORG);
    const orgs = data?.organization || [];
    const [updateUser] = useMutation(UPDATE_USER);
    const [formState, setFormState] = useState({organizationName: ''})

    const user = Auth.getUser();
    console.log(user);
    const userId = user ? user._id : '';

    const handleFormSubmit = async (organizationName) => {
        try{
            const mutationResponse = await updateUser({
                variables: {
                  userId: userId,
                  organizationName: organizationName
                },
            });
            const updatedUser = mutationResponse.data.updateUser;
            setFormState({ organizationName: updatedUser.organizationName });
            alert('Organization successfully updated');
            console.log(user);
        } catch (error) {
            console.log(error);
        }
      };

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
                                <button onClick={() => handleFormSubmit(organization.name)}>JOIN</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Organization;

