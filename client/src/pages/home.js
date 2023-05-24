import React, { useState } from 'react';
import Login from "./login"
import Register from "./register"

function Home() {
    const [currentPage, setCurrentPage] = useState('login');
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
  <div>
  <header>
    
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
  
    
   </div>
    );
  }

  export default Home