const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "cddbb5c4a2bce590d3d410561d50007b";

export const api = {
    movies : {
         fetch(){
            return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`, 
                {
                    method: 'GET',
                }
            )
        }
    },
}


// export const api_post = new class Api {
//     async fetchPosts() {
//         const response = await fetch(MAIN_URI, {
//             method: 'GET',
//         });

//         const { data: fetchedPosts } = await response.json();

//         return fetchedPosts;
//     }

//     async likePost(id) {
//         const response = await fetch(`${MAIN_URI}/${id}`, {
//             method:  'PUT',
//             headers: {
//                 Authorization: TOKEN,
//             },
//         });

//         const { data: likedPost } = await response.json();

//         return likedPost;
//     }

//     async createPost(comment) {
//         const response = await fetch(MAIN_URI, {
//             method:  'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization:  TOKEN,
//             },
//             body: JSON.stringify({ comment }),
//         });

//         const { data: createdPost } = await response.json();

//         return createdPost;
//     }

//     async removePost(id) {
//         await fetch(`${MAIN_URI}/${id}`, {
//             method:  'DELETE',
//             headers: {
//                 Authorization: TOKEN,
//             },
//         });
//     }
// }();