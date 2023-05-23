import React, { useState } from 'react';
import Login from "./login"
import Register from "./register"

function Navbar() {
    const [currentPage, setCurrentPage] = useState('login');
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
  <div>
  <header>
    <div className='name'style={{ cursor: "pointer" }} onClick={() => handlePageChange('login')}>EZLeagues</div>
      <nav>
       {/* a tag for page rendering, change the input for handlePageChange as needed */}
            <a className='navLink' href="#" onClick={() => handlePageChange('login')}>
              login
            </a>
            <a className='navLink' href="#" onClick={() => handlePageChange('register')}>
              Register
            </a>
      </nav>
  </header>
  
    {currentPage === 'login' && <Login />}
    {currentPage === 'register' && <Register />}
   </div>
    );
  }

  export default Navbar