
// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments 
import { routers_nav } from '../../utils/routes';


const NavItem = ({ path, icon, exact, img, name  }) =>{ 
    return (
            <NavLink 
                to={path} 
                exact={exact}   
                className='link_nav'
                activeStyle={{ color: '#a19ef7'}}
            > 
                {icon && icon}
                {name && <p className="user_view">{name}</p>}
                {img && <img src={img} width="35" alt="user profile"/> }

            </NavLink> 
    )
} 

export const Navigation = () => {
    const navJSX = routers_nav.map((router) => 
        <NavItem
            key={router.label}
           {...router}
        />
    );
    return  <>{ navJSX }</>
}


export const Bar = () => 

    <header className="page-header ">
        <nav className="container page-header__nav">
            <input type="text" placeholder="Search transactions invoices or help"/>
                <ul className="site-nav">
                    <Navigation/>
                </ul>
        </nav>
    </header>
