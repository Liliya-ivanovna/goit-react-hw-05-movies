import axios from "axios";

const URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = '3073a492602eee53f225e37916e4cfb6';

const fetchImagesWithQuery = async (searchQuery,page) => {
    const response = await axios.get(URL,{
        params: {
            q:searchQuery,
            page,
            key:KEY,
            image_type:"photo",
            orientation:"horizontal",
            per_page:12,
        },
    });

    return response.data;
};

export default  fetchImagesWithQuery ;