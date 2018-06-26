import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-b7472.firebaseio.com/' });

export default instance;