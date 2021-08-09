import axios from 'axios';
import { tokenConfigStateless } from '../store/utils';

const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};

export const createPost = async ({ text }, token) => {
  return axios.post('/api/posts', { text }, tokenConfigStateless(token));
};

export { getPost, getUser };
