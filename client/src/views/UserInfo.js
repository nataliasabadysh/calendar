import React, { useEffect, useState } from 'react';
import ls from '../utils/LocalStorage';

const getInitialState = () => ls.get('user'); 

const UserInfo = (props) =>{ 
const [user, setUser] = useState(getInitialState);

const isLogin  = props.match.path === '/user-detail'; 
const pageTitle = isLogin ? 'Log out': 'log in';
const title = isLogin ? 'Have an account': 'Need an account?';

const _onLogIn = () => {
  const data = {
    name: 'Natalia',
    password: '12345',
  }
  setUser(data)
}
useEffect(() => 
  ls.save('user', user), 
  [user]
)
const userInfo = ls.get('user');

return(  <>
    <div className = 'section__plasephoder'>
      <div>
        <h1 className="section__title"> {title} </h1>
        { !userInfo 
          && <>
              <section>
                <h1 className="section__title">Log in </h1>
                <h1 className="section__title">Log out </h1>
                <h4>Time: 11: 25am </h4>
                <h4>Date: 24 of May </h4>
              </section>
          </>
        || 
        <section>
          <h1 className="section__title">{userInfo.name} </h1>
        </section> }
        
      <button className="btn" onClick={ _onLogIn } >{pageTitle}</button>
    </div>
  </div>
  </>
);
}
export default UserInfo;