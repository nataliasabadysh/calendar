// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments 
import { withLoging } from '../../hoc/withLogin';

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderBottom: '1px solid #2A363B',
      },
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
  };

const NavUser = ({  user  }) => {
    //  <img src="https://pngimage.net/wp-content/uploads/2018/06/john-doe-png.png" width='30' /> 
    return (
    <div className={styles.wrapper}>
        <NavLink to="/user-detail" style={styles.link} activeStyle={{ color: '#a19ef7' }}>
            {user && 
                <>
                    { user }
                </>
            }
         </NavLink>
    
    </div>  
    )        
}

export default withLoging(NavUser);
