import axios from 'axios';

const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

export { getPost };
