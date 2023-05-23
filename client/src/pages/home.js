import React, { useState } from 'react';
import Login from "./login"

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
      </nav>
  </header>
  
    {currentPage === 'login' && <Login />}
   </div>
    );
  }

  export default Navbar