
import React from 'react';

export const Card = ({ login, avatar_url, getUserInfo }) => (
    <div >
      <img src={avatar_url} alt={login}  />
      <div >
        <h5 >{login}</h5>
        <button onClick={()=> getUserInfo(login)}> Open </button>
      </div>
    </div>
)
