import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () =>{

    const [email, setEmail] = useState({ email: '' });
    const [password, setPassword] = useState({ password: '' });
    // says data is unused, does that mean that when it is used on line 27 and 31 that it isnt using the login mutation?
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., send request to server)
        console.log('Email:', email);
        console.log('Password:', password);
        try {
          const { data } = await Register({
            variables: { email, password },
          });

          Auth.login(data.login.token);
        } catch (err) {
          console.log(err);
        }
        // Reset form fields
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      );
}

export default Login;