// Core
import React, { useEffect, useState } from 'react';
// Instruments
import api from '../../api/itunes';

const List = ()  => {
   const [toplist, setTopList] = useState([]);

    useEffect(() => {
        api.fetchTopalbums().then( list => setTopList(list))
    }, []);

    const authhorJSX =  toplist && toplist.feed && toplist.feed.author && toplist.feed.author.name && 
            toplist.feed.author.name.label && <h1>{ toplist.feed.author.name.label }</h1>
    
    const topListJSX =  toplist && toplist.feed &&  
        <ul>
        { 
            toplist.feed.entry.map( (item, i )=> 
                <li key={i}>{item && item.title && item.title.label}</li>
                )
        }
        </ul>

    return(
        <> 
        {authhorJSX}
        {topListJSX}
        </>
    )
}

export default List;