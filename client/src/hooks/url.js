// Core
import { useEffect, useState } from 'react';
import axios from 'axios';

// instruments
const url = 'https://my-json-server.typicode.com/typicode/demo/db';

export const useCustomFetch = () => {
    const [isLoadingData, setIsLoading] = useState(false);
    const [errorData, setError] = useState(null);
    const [responseData, setResponse] = useState(null);

    const [options, setOptions] = useState({}); // doFetch({ ... })

    const doFetch = (options = {}) => {
        setIsLoading(true);
        setOptions(options)
    }

    useEffect(() => {
        if(!isLoadingData) return

        axios[options.method](url, options && options.data).then(res =>{
           setResponse(res)
        })
        .catch(error =>setError(error))
        .finally(() => setIsLoading(false) );

    },[isLoadingData]);

  return [{ responseData, isLoadingData, errorData }, doFetch];
}