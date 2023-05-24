import React from 'react';
import Auth from "../utils/auth"


// const decodedToken = Auth.decode();

function dashboard(){
console.log(Auth.getUser())
    return(
        <div>
            <h1>working board</h1>
        </div>
    )
}

export default dashboard