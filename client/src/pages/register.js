import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Login from './login'

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
  const [isAccountCreated, setIsAccountCreated] = useState(false);
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
      alert('Account created!')
      setIsAccountCreated(true)
    } catch (error) {
      // Handle error
      console.log(error);
    }
  }
  if (isAccountCreated) {
    return <Login />;
  }

  return (
    <div className='registration-container'>
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-row">
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          User Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Birth Date:
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Organization Name:
          <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Is Commissioner:
          <input type="checkbox" checked={isCommissioner} onChange={(e) => setIsCommissioner(e.target.checked)} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Is Captain:
          <input type="checkbox" checked={isCaptain} onChange={(e) => setIsCaptain(e.target.checked)} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Is Player:
          <input type="checkbox" checked={isPlayer} onChange={(e) => setIsPlayer(e.target.checked)} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Is League Worker:
          <input type="checkbox" checked={isLeagueWorker} onChange={(e) => setIsLeagueWorker(e.target.checked)} />
        </label>
      </div>
      <div className="form-row">
        <button type="submit" className='home-button' disabled={loading}>
          {loading ? 'Loading...' : 'Create User'}
        </button>
      </div>
      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
};

export default CreateUserForm;