

export const getGifs = async(category) => {
    const api_key = 'Cz4AZU2bxcz5Ei1hWlS2CLqziretL2Wr';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ limit }`;

    const res = await fetch(url);

    const { data } = await res.json();

    const gifs = data.map(({ id, title, images }) => ({
            id: id,
            title: title,
            url: images?.downsized_medium.url
        })
    );

    return gifs;
}