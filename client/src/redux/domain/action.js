

export const nameActions = {
    // Sync
    start: () => ({}),
    stop: () => ({}),

    // Action Creater with params 
    nameAC: (movies) => ({
        type: types.FILL_MOVIES,
        payload: movies,
    }),

    removePostAsync = (postId)=> ({
        type: "REMOVE_POST_ASYNC",
        payload: postId,
    }),
    removePost = postId => ({
        type: "REMOVE_POST",
        payload: postId,
    })
};