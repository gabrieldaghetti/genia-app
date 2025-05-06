import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.sistemasiga.com.br/api/v1',
});

export default API;
