import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


const GitHubList = ({ users, getUserInfo }) => {
  const location = useLocation();

  return( 
    <ul className="container_list"> 
      { users.map( ({ login, avatar_url }) => 
        <li className="container_list--item" key={login}> 
          <div className="container_list--img">
              <img src={avatar_url} alt={login} width='250' />
              <h1> nicname: {login}</h1>
              <Link 
                  to={{
                    pathname: `/github/${login}`,
                    state: { from: location },
                  }}
                > 
                <div className='btn' onClick={()=> getUserInfo(login)}> Open </div> 
              </Link>
          </div>
        </li>
      )}
    </ul>
)};
  
export default GitHubList;