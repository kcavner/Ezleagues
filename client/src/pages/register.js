import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [isCommissioner, setIsCommissioner] = useState(false);
  const [isCaptain, setIsCaptain] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);
  const [isLeagueWorker, setIsLeagueWorker] = useState(false);

  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await createUser({
        variables: {
          firstName,
          lastName,
          userName,
          email,
          password,
          birthDate,
          organizationName,
          isCommissioner,
          isCaptain,
          isPlayer,
          isLeagueWorker,
        },
      });
  
      // Handle successful registration
      console.log(data);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  }
  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              New user registration
            </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="register space-y-6" onSubmit={handleSubmit}>
          <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            First Name:
          </label>
          <div className="mt-2">
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          </div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
          <label>
            User Name:
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <label>
            Birth Date:
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          </label>
          <label>
            Organization Name:
            <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} required />
          </label>
          <label>
            Is Commissioner:
            <input type="checkbox" checked={isCommissioner} onChange={(e) => setIsCommissioner(e.target.checked)} />
          </label>
          <label>
            Is Captain:
            <input type="checkbox" checked={isCaptain} onChange={(e) => setIsCaptain(e.target.checked)} />
          </label>
          <label>
            Is Player:
            <input type="checkbox" checked={isPlayer} onChange={(e) => setIsPlayer(e.target.checked)} />
          </label>
          <label>
            Is League Worker:
            <input type="checkbox" checked={isLeagueWorker} onChange={(e) => setIsLeagueWorker(e.target.checked)} />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Create User'}
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;