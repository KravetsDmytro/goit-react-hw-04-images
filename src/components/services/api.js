import axios from 'axios';

const KEY= '35566012-73194189fcef75c31768f8916';
axios.defaults.baseURL = 'https://pixabay.com/api'

export async function fetchImage(search, page) {
     const { data } = await axios.get(`/`,
        {
            params: {
                key: KEY,
                q: search,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: 12,
            }
        });
    return data;
}
