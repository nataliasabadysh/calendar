import React, { useState } from 'react';
import axios from 'axios';
import { withCredentials, git_search_users, git_users} from '../config'

export const useGitHub = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState([]);

  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const _onChange = ({ target: { value } }) => {
    if(!value){
      setUsers([]);
      setPage([]);
    }
    setName(value);
  }
   
  const _onSubmit = (e) => {
    if(e.key === 'Enter'){
      _getUsers();
    }
  }

  const _getUsers =  async (page) => {
        setLoader(true);
        try{
          const resp = await axios.get(withCredentials(`${git_search_users}?q=${name}&per_page=9&page=${page}`))
          setUsers([...users, ...resp.data.items]);
        }
        catch(error){
        //   setError(error.response.statusText)
        setError(true)
        }
        finally{
          setLoader(false);
        }
  }

  const _getUser =  async (login) => {
    setLoader(true);

    try{
      const resp = await axios.get(withCredentials(`${git_users}${login}?`))
      setUser(resp.data);
    }
    catch(error){
        setError(true)
    }
    finally{
      setLoader(false);
    }
}

const _getUserRepo = async (login) => {
  setLoader(true);

  try{
    const resp = await axios.get(withCredentials(`${git_users}${login}/repos?per_page=5&`))
    setRepo(resp.data);
  }
  catch(error){
    setError(true)
  }
  finally{
    setLoader(false);
  }
}

const getUserInfo = login =>{
  _getUser(login);
  _getUserRepo();
}

const _getMoreUsers = () => {
  const newPage = page + 1;
  _getUsers(newPage);
  setPage(newPage);
};


  return { _getMoreUsers, getUserInfo, _getUserRepo , _getUser, _onSubmit, _onChange, users, loader, error, name } ;

}