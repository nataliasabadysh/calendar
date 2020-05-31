import { createSelector } from 'reselect';

export const getSelectedUserId = state => state.users.selectedId;

const getAllUsers = state => state.users.items;

export const getUserIds = createSelector(
    [getAllUsers],
    users => users.map(({ id }) => id),
);

// export const getUserIds = state => {
//     const allUsers = getAllUsers(state);
//     return allUsers.map(({ id }) => id);
// };

const getAllPosts = state => state.posts;

export const getPostsWithSelectedAuthor = createSelector(
    [getAllPosts, getSelectedUserId],
    (posts, selectedId) => posts.filter(post => post.userId === selectedId),
);

// export const getPostsWithSelectedAuthor = state => {
//     const allPosts = getAllPosts(state);
//     const selectedId = getSelectedUserId(state);

//     return allPosts.filter(post => post.userId === selectedId);
// };

export const makeGetPostsWithAuthor = () =>
    createSelector(
        [getAllPosts, (state, ownProps) => ownProps.id],
        (posts, id) => posts.filter(post => post.userId === id),
    );

// export const getPostsWithAuthor = createSelector(
//     [getAllPosts, (state, ownProps) => ownProps.id],
//     (posts, id) => posts.filter(post => post.userId === id),
// );

// export const getPostsWithAuthor = (state, ownProps) => {
//     const allPosts = getAllPosts(state);

//     return allPosts.filter(post => post.userId === ownProps.id);
// };

const getItems = state => state.notes.items;

const getFilter = state => state.notes.filter;

const getVisibleNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(item => item.text.toLowerCase().includes(filter));
};


const getAuthorIds = state => state.authors.ids;

export const getSelectedAuthorId = state => state.authors.selectedId;

const getAurhorEntities = state => state.entities.authors;

export const getAllAuthors = createSelector(
    [getAuthorIds, getAurhorEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

// export const getAllAuthors = state => {
//     const ids = getAuthorIds(state);
//     const entities = getAurhorEntities(state);

//     return ids.map(id => entities[id]);
// };

const getPostIds = state => state.posts;
const getPostEntities = state => state.entities.posts;

export const getPostsWithAuthor = state => {
    const authorId = getSelectedAuthorId(state);
    const postIds = getPostIds(state);
    const entities = getPostEntities(state);

    // const posts = [];

    // postIds.forEach(postId => {
    //     const post = entities[postId];

    // if (post.author === authorId) {
    //     posts.push(post);
    // }
    // });

    return postIds.reduce((acc, postId) => {
        const post = entities[postId];

        if (post.author === authorId) {
            acc.push(post);
        }

        return acc;
    }, []);
};


// Products
const getProductIds = state => state.products;

const getProductsEntities = state => state.entities.products;

export const getProducts = createSelector(
    [getProductIds, getProductsEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

// Cart

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
    getCartProductIds,
    ids => ids.length,
);

export const getCartProducts = createSelector(
    [getCartProductIds, getCartProductAmounts, getProductsEntities],
    (ids, amounts, entities) =>
        ids.map(id => ({
            ...entities[id],
            amount: amounts[id],
        })),
);