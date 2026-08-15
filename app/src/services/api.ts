import axios from 'axios';

const API = axios.create({
  baseURL: 'https://notes-web-app-dkev.onrender.com/api',
});

export default API;
