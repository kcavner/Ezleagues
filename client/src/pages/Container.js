import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./home";
import Login from "./login";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login'){
            return <Login />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className="main-container flex flex-row min-w-screen mt-16 bg-gray-900">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* Footer component here. */}
        </div>
    );
}