import React from 'react';
// import icons for nav bar
import {SlLogin} from 'react-icons/sl';
import {FiHome} from 'react-icons/fi';
import { SlNotebook } from 'react-icons/sl';

function Nav({ currentPage, handlePageChange }) {
    return(
        // add styling to this div below
        <div className="header-class fixed top-0 w-screen h-16 m-0
                        flex flex-row
                        bg-gray-700 text-white shadow-lg"> 
        <div className='name'style={{ cursor: "pointer" }} onClick={() => handlePageChange('login')}>EZLeagues</div>
            
        <nav className="dropdown">
            <ul>
            <li>
                <a className='navLink' href="#" onClick={() => handlePageChange('Login')}>
                login
                </a>
            </li>
            <li>
                <a className='navLink' href="#" onClick={() => handlePageChange('Register')}>
                Register
                </a>
            </li>
            </ul>
        </nav>
            {/* different navigation components here */}
            {/* login / logout */}
            <div className='icons'>
                <NavIcon icon = {<SlLogin size="28"/>} text = 'Log In/Out' active={currentPage==='Login'}
                    onClick={()=> handlePageChange('Login')}/>
                {/* home */}
                <NavIcon icon = {<FiHome size="28"/>} text = 'Home' active={currentPage==='Home'}
                    onClick={()=> handlePageChange('Home')}/>
                {/* register */}
                <NavIcon icon={<SlNotebook size="28"/>} text = 'Register' active={currentPage==='Register'}
                    onClick={()=> handlePageChange('Register')}/>
            </div>
        </div>
    )
}

const NavIcon = ({icon, text, active, onClick}) => (
    <div className={`navbar-icon group ${active ? 'bg-gray-700' : ''}`} onClick={onClick}>
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
)

export default Nav;