

// https://itunes.apple.com/us/rss/topalbums/limit=100/json

import axios from 'axios';
const base_url = 'https://itunes.apple.com/us';


const fetchTopalbums = async (limit = 10) => {
    const data = await axios.get(`${base_url}/rss/topalbums/limit=${limit}/json`)
        .then(response => response.data)
        .then(data => data)
        .catch(error => console.log(error.message))
    return data;
  };
  
  export default {
    fetchTopalbums,
  };