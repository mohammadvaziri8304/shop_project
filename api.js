import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/docs';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
