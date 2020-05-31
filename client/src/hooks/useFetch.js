import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = ({ method, url, data}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(false)


    useEffect(() => {
        if(isSubmitting){
            return;
        }
        setIsLoading(true);

        axios[method](url, data && data).then(res =>{
            if(res.status == 200){
                setResponse(res.data);
            }
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false) )
    },[]);

  return { response, isLoading, error };
}