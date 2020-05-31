
const initialState = {
    data: [], 
    error: null,
    isFetching: false,
};

export const nameReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.START_FETCHING:
                return { 
                    ...state, 
                    isFetching: true 
                };

        case types.FILL_DATA:
            return { 
                ...state, 
                data: payload 
            };

        // case "CREAT": [actions.payload, ...state]; init = [],
        case "CREAT":  return { 
                ...state, 
                data : [payload]
            };

        case "REMOVE": state.data.filter(id => id !== payload.id);
        case "ADD": [...state, payload.id];

        default:
            return state;
    }
};

const init = {
    isPostFetching : false,
}
export const uiREducer = (state = init, { type, payload } ) => {
        switch(type){
            case "START": 
                return {
                    ...state,
                    isPostFetching: true
                };
                
            case "STOP": 
                return {
                    ...state,
                    isPostFetching: false
                };

            default:
                return state;
        }
}