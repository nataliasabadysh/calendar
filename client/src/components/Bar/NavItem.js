// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments 
import { withLoging } from '../../hoc/withLogin';

const NavItem = ({ path, icon, exact, img, name, isAuth, user  }) => {


    // console.log(user); { isAuth ? <p> name as {user} </p> : <p>Unknown user</p> }

    return(
        <>
        <NavLink 
                to={path} 
                exact={exact}   
                className='link_nav'
                activeStyle={{ color: '#a19ef7'}}
            > 
                {icon && icon}
            </NavLink> 
        </>)
    }

export default withLoging(NavItem);
