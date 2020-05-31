// Core
import React from 'react';
// Instruments 
import { routers_nav } from '../../utils/routes';
import NavItem from './NavItem';
import NavUser from './NavUser';


export const Navigation = () => {
    const navJSX = routers_nav.map((router) => 
        <NavItem
            key={router.label}
           {...router}
        />
    );

    const userJSX = <NavUser /> 

    return <>{ navJSX } {userJSX}</>
}
