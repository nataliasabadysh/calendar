import axios from 'axios';

//git hub accaunt
const id = process.env.REACT_APP_CLIENT_ID;
const key = process.env.REACT_APP_CLIENT_SECRET;

export const git_search_users = 'https://api.github.com/search/users';
export const git_users = 'https://api.github.com/users/';

export const withCredentials = (url) =>  `${url}client_id=${id}&client_secret=${key}`;

export const getUser = async (login) =>  
    await axios.get(withCredentials(`${git_users}${login}?`));
  
export const getUserRepos = async (login) => 
    await axios.get(withCredentials(`${git_users}${login}/repos?per_page=15&`));

export const getUsers = async (name) => 
     await axios.get( withCredentials(`${git_search_users}?q=${name}&per_page=9&page=1&`));
  