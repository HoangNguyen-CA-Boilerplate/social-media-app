import axios from 'axios';

const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};

export { getPost, getUser };
