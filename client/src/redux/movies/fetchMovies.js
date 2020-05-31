import { movieActions } from './action';
import { api } from '../../api/themoviedb';


export const fetchMovieAsync = () => async(dispatch) => {
    try {
        dispatch(movieActions.startFetching());

        const response = await api.movies.fetch();

        if (response.status !== 200) {
            throw new Error(`We can't receive movies 😢`);
        }
        if (response.status === 500) {
            throw new Error(`Internal Server Error Page 😢`);
        }
        const result = await response.json();

        dispatch(movieActions.fillMovies(result.results));
    } catch(error){

        dispatch(movieActions.stopFetchingWithError(error));
    } finally {
        dispatch(movieActions.stopFetching());
    }
}
