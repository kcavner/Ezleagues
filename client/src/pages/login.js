import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
          const { data } = await login({
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
        <form className="loginform" onSubmit={handleSubmit}>
          <h2 className="loginH2">Login</h2>
          <div>
            <label>Email: <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
           
          </div>
          <div>
            <label>Password:<input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
            
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          {error && <p>{error.message}</p>}
        </form>
          
      );
}

export default Login;