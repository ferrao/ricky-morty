import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});

export default axios;
