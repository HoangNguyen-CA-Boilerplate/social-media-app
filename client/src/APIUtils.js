import axios from 'axios';

export const createPost = async ({ text }, config) => {
  return axios.post('/api/posts', { text }, config); // requires token
};
