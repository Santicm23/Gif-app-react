
import { useState, useEffect } from 'react';

import { getGifs } from '../apis';


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAndSetGifs = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getAndSetGifs();
    }, []);

    return {
        images,
        isLoading
    }
}
