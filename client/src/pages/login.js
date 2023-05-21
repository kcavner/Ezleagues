import React, { useState } from 'react';

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., send request to server)
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset form fields
        setEmail('');
        setPassword('');
    };
    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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

export default Login