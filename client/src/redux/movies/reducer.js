

import { types } from './action';

const initialState = {
    movies: [], 
    error: null,
    isFetching: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.START_FETCHING:
                return { ...state, isFetching: true };
                
        case types.STOP_FETCHING:
            return { ...state, isFetching: false };

        case types.ERROR_FETCHING:
            return { ...state, error: payload };

        case types.FILL_MOVIES:
            return { ...state, movies: payload };

        default:
            return state;
    }
};