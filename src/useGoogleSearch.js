import { useState, useEffect } from 'react'

const API_KEY = 'AIzaSyBWbEg3gjVg_85MtuXf3W9rV8cvy_DMHYc';

const CONTEXT_KEY = 'a300b2e1aac1ec3ad';

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term.term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData();
    }, [term])

    return { data }

}

export default useGoogleSearch