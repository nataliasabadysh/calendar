// Core 
import { useState, useEffect } from 'react';

const getInitialState = () => (window.localStorage.getItem('theme')) || 'light'; // dark

export const useTheme = ()=> {
    const [themeColor, setThemeColor] = useState(getInitialState);
    const [toggle, setToggle] = useState(getInitialState);
    
    const _setTheme = () => {
        setToggle(!toggle);
        setThemeColor(( prev)=>  prev === 'light' ? 'dark' : 'light' )
    }
    useEffect( 
      () => window.localStorage.setItem('theme', themeColor), 
      [themeColor], 
    )

    return { themeColor, toggle, _setTheme}
};
