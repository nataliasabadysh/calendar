import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserRepos } from "../../api/gitpub";
import  { Loader }  from "../../components/Loader/index";

const List = ({ repos })=> {
  return(
    <ul> { repos.map(({ id, html_url, name }) => (
      <li key={id}>
        <a href={html_url} rel="noopener noreferrer" target="_blank">{name}</a>
      </li>))}
  </ul>
  )
}


export const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  const [notificatio, setNotificatio] = useState(false);

  const { login } = useParams();

  useEffect(() => {
    try{
      getUserRepos(login)
        .then((response) => setRepos(response.data))
        .then(()=> setLoader(false))
    }
    catch(error){
      setError(error)
    }
  }, [login]);

  return (
    <>
      {loader && <Loader />}
      {error && `Something went wrong ${error}`}

      {!loader && !error && 
        <div className="section__plasephoder">
          <List repos={repos} />
        </div>
      }
      {notificatio && <> Oops, nothing found here </>}
      </>
  );
};