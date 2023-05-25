import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERNAME } from '../utils/queries';
import Auth from '../utils/auth';

const User = () => {
    const { loading, data } = useQuery(QUERY_USERNAME);
    const user = data?.user || [];

    return (
        <main>
            <div>
                <h2>Users</h2>
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                    ) : (
                        <div>
                            {user.map((user) => (
                                <div className='position relative w-80 h-100
                                    flex border mb-2.5 p-2.5 border-solid border-[#ccc]' key={user._id}>
                                    <h3>{user.userName}</h3>
                                    <p className='m-4'>{user.organizationName}</p>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default User;