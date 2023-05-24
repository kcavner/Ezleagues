import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./home";
import Login from "./login";
import CreateUserForm from "./register";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

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
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="main-container flex flex-row min-w-screen mt-16 white">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* Footer component here. */}
        </div>
    );
}