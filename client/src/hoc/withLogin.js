import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const withLoging = NewComponent => (props) => {
    const user = useSelector(state => state.user.user.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "INIT"})
    }, []);

    return <NewComponent    
                {...props} 
                isAuth={ Boolean(user) } 
                user={user}
            />
}
