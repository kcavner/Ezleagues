import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import Home from "./home";
import Login from "./login";
import CreateUserForm from "./register";
import Footer from "./Footer";
import Organization from "./Organization";
import Sports from "./Sports";
import Auth from "../utils/auth"


export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
    
    useEffect(() => {
        if (Auth.loggedIn() === true) {
          setCurrentPage('Home');
        }
      }, []);

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login'){
            return <Login />;
        }
        if (currentPage === 'Register'){
            return <CreateUserForm />;
        }
        if (currentPage === 'Organization'){
            return <Organization />
        }
        if (currentPage === 'Sports'){
            return <Sports />;
        }
    };

    

    return (
        <div className="min-h-screen flex flex-col mt-16">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {Footer()}
        </div>
    );

    
}