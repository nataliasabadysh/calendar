import React, { useEffect } from 'react';
import { Link, useLocation, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { path } from '../utils/routes';
import { fetchMovieAsync } from '../redux/movies/fetchMovies';
import List from './movie/List';
import { ArticleBar } from '../components/Feed/ArticleBar';



const Inbox = () => {

  const stateMovie = useSelector((state) => state.movie);
  const { movies, isFetching, error } = stateMovie;

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMovieAsync())
  }, []);
  
  return (
    <div className = 'section__plasephoder'>
      <section>
        <h1 className="section__title">Inbox Page + movie data </h1>

        <ul>
            {movies.map(({ id, original_title, name}) => (
              <li key={id}>
                  <Link
                      to={{
                        pathname: `movies/${id}`,
                        state: { from: location },
                      }}
                    >
                  {original_title || name }
                </Link>
              </li>
            ))}
      </ul>
      </section>

      <ArticleBar/>
    </div>
  );
}
  
export default Inbox;