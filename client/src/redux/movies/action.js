export const types = {
    // Sync
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
    FILL_MOVIES: 'FILL_MOVIES',
    ERROR_FETCHING: 'ERROR_FETCHING',
    // Async
    FETCH_MOVIE_ASYNC: 'FETCH_MOVIE_ASYNC',
};

export const movieActions = {
    // Sync
    startFetching: () => ({ type: types.START_FETCHING }),
    stopFetching: () => ({ type: types.STOP_FETCHING }),

    fillMovies: (movies) => ({
        type: types.FILL_MOVIES,
        payload: movies,
    }),
    stopFetchingWithError: (error) => ({
        type: types.ERROR_FETCHING,
        payload: error,
    }),
    fetchStarshipsAsync: () => ({ type: types.FETCH_MOVIE_ASYNC }),
};
