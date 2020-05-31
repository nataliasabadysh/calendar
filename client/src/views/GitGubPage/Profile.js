import React, { useEffect, useState } from "react";
import { useParams, useLocation, useHistory, useRouteMatch, Link } from "react-router-dom";
import { Loader } from '../../components/Loader/index';
import { Switch, Route } from 'react-router-dom';

import { getUser } from "../../api/gitpub";
import { Repos } from './Repos';

const Profile = () => {
  const [singleUser, setSingleUser] = useState({});
  const [isOpenRepo, setOpenRepo] = useState(false);
  const [loading, setLoading] = useState(true);

  const { login } = useParams();
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const locationState = useLocation();

  useEffect(() => {
    getUser(login)
      .then((response) => setSingleUser(response.data))
      .then(() => setLoading(false));
  }, [login]);

  const showRepos = () =>  {
    if(isOpenRepo){
      history.push(`${url}`); 
      setOpenRepo(!isOpenRepo)
    }
    else if(!isOpenRepo){
      history.push(`${url}/repos`); 
      setOpenRepo(!isOpenRepo)
    }
  }
  
  const goBack = () => history.push('/github');

  if (loading) {
   return <Loader />
  }

  const {
    name,
    company,
    avatar_url,
    location,
    login: loginUser,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = singleUser;


  const buttonTitle = !isOpenRepo ? 'Show Repos' : 'Hide Repos';

  return  (
        <>
            <div>  
              <button className="btn" onClick={goBack}>  Go back </button> 
            </div>

            <div className = 'section__plasephoder'>
              <section>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  <h1 className="section__title">{name || loginUser}</h1>
                </a>

                <img src={avatar_url} alt={name} width='200'/>
               
                { location && <p> Geolocation: {location}</p> }
                { bio && <h3>BIO{bio}</h3> }
                { company && <span>Company: { company } </span>}
                { blog &&  <span>Website: {blog} </span> }

                <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn"> Open profile </a>
                <button onClick={showRepos} className="btn">{ buttonTitle } </button>
                
              </section>
            </div>
            <Switch>
              <Route path={`${path}/repos`} component={Repos} />
          </Switch>
      </>)
};

export default Profile;