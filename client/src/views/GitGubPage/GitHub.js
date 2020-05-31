import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from "query-string";
import { Loader } from '../../components/Loader/index';

// Custom hook 
import { withCredentials, git_search_users, git_users, getUsers } from '../../api/gitpub';
import GitHubList from './GitHubList';


const GitHub = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState([]);

  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const history = useHistory();

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
      history.push({ ...location, search: `?nickname=${name}` });
    }
  }

  useEffect(() => {
    if (!location.search) {
      setUsers([]);
      return;
    }
    const loginqs = queryString.parse(location.search).nickname;
    getUsers(loginqs).then((res) => setUsers(res.data.items));
  }, [location.search]);

  const _getUsers =  async (page) => {

        setLoader(true);
        try{
          const resp = await axios.get(withCredentials(`${git_search_users}?q=${name}&per_page=9&page=${page}&`))
          setUsers([...users, ...resp.data.items]);
        }
        catch(error){
          setError(error.response.statusText)
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
      setError(error)
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
    setError(error)
  }
  finally{
    setLoader(false);
  }
}

const getUserInfo = login =>{
  _getUser(login);
  _getUserRepo();
}
const getMoreImage = () => {
  const newPage = page + 1;
  _getUsers(newPage);
  setPage(newPage);
};

  return( 
          <div className = 'section__plasephoder'>
            <section>
            {loader && <Loader/>}
            {error && <>Something wrong happened  ...<p className="error">{error} </p> </>}
        
              <h1 className="section__title"> Git hub users</h1>
              <input onChange={_onChange} value={name} type="text" name="name" placeholder="Enter nicname" onKeyPress={_onSubmit} />
              <button className="btn-primery" onSubmit={_onSubmit} >Serch </button>
      
              {!loader && !error &&  users &&  <GitHubList users={users} getUserInfo={getUserInfo}/> }

              { !! users.length && <button  className="btn-primery" onClick={getMoreImage}> Show more </button> }
            </section>
          </div>
          )};
  
export default GitHub;