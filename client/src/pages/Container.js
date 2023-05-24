import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./home";
import Login from "./login";
import CreateUserForm from "./register";
import Footer from "./Footer";

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
        <div className="min-h-screen flex flex-col mt-16">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {Footer()}
        </div>
    );

    
}