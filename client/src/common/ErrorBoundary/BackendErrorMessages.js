// Core
import React, { useState } from 'react';


// example error message from the back on log in 

const errorMessage = {
    email: ['cant be blanck'],
    password: ['can not be blank'],
    username: ['is too short (min is 1 character)']
};

export const BackendErroMessages = () => {
    // const errorMSG = Object.keys(errorMessage); // ['email', 'password', 'username'];
    const errorMSG = Object.keys(errorMessage).map(name => {
        const message = errorMessage[name].join(' ');
        return `${name} ${message}`;
    }) 
    return(
        <ul>
            {errorMSG.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
    );
}
