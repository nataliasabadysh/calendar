// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments 
import { routers } from '../../utils/routes';
import { Logo } from '../Logo';

const NavItem = ({ path, icon, label, exact }) =>{ 
    return (
            <NavLink 
                to={path} 
                exact={exact}   
                className='link'
                activeStyle={{  background: '#3c3b53', borderLeft: '4px solid #a19ef7'}}
            > 
            {icon} <span className='nav-label'>{label}</span>
            </NavLink> 
    )
} 

export const Navigation = () => {
    const navJSX = routers.map(routers => 
        <NavItem
            key={routers.label}
            label={routers.label}
            exact={routers.exact}
            path={routers.path}
            icon={routers.icon}
        />
    );

    return  <><div className="sidebar"> <Logo /> { navJSX }</div></>;
}