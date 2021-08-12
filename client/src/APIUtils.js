import axios from 'axios';

export const getUser = (username, config) => {
  return axios.get(`/api/users/${username}`, config);
};

export const getUserPosts = (username, config) => {
  return axios.get(`/api/users/${username}/posts`, config);
};

export const getPosts = (config) => {
  return axios.get('/api/posts', config);
};

export const getPost = (id, config) => {
  return axios.get(`/api/posts/${id}`, config);
};

export const createPost = async ({ text }, config) => {
  return axios.post('/api/posts', { text }, config); // requires token
};

export const likePost = (id, config) => {
  return axios.patch(`/api/posts/${id}/like`, {}, config); // requires token
};

export const deletePost = (id, config) => {
  return axios.delete(`/api/posts/${id}`, config); // requires token
};
