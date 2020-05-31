
// Core
import React from 'react';
// Instruments 
import { useTheme } from '../../hooks/Theme/useTheme';
import { Navigation } from './Nav';

import { withLoging } from '../../hoc/withLogin';


export const Bar = () => {
    const {themeColor, _setTheme, toggle } = useTheme();
    const colorTheme = toggle ? 'class-light': 'class-dark'
    return(

    <header className='page-header'>
        <nav className="container page-header__nav">
            <span onClick={_setTheme} className={`btn-theme ${colorTheme}`}> Theme: {themeColor} </span>
            <ul className="site-nav">
                <Navigation />
            </ul>
        </nav>
    </header>
    )
}
