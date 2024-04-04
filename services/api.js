import axios from 'axios';

const api = axios.create({
  baseURL: 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/',
});

export default api;
