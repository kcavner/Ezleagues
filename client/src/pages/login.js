import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Home from './home'

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isCommissioner, setIsCommissioner] = useState('');
    // const [isCaptain, setIsCaptain] = useState('');
    // const [isPlayer, setIsPlayer] = useState('');
    // const [isLeagueWorker, setIsLeagueWorker] = useState('');
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

    if(Auth.loggedIn() === true){
      console.log("user is logged in")
      return <Home />;
    }
    else{
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="sign-in space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input type="email" value={email} onChange={handleEmailChange} required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <input type="password" value={password} onChange={handlePasswordChange} required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <button type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Login
                    </button>
                </div>
              </form>
          </div>
          
        </div>
      );
}
}

export default Login;