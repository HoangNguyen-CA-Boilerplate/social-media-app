import axios from 'axios';
import { tokenConfigStateless } from './store/utils';

export const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};

export const getUserPosts = (username) => {
  return axios.get(`/api/users/${username}/posts`);
};

export const getPosts = () => {
  return axios.get('/api/posts');
};

export const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

export const createPost = async ({ text }, token) => {
  return axios.post('/api/posts', { text }, tokenConfigStateless(token));
};

export const likePost = (id, token) => {
  return axios.patch(`/api/posts/${id}/like`, {}, tokenConfigStateless(token));
};

export const deletePost = (id, token) => {
  return axios.delete(`/api/posts/${id}`, tokenConfigStateless(token));
};
