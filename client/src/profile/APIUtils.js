import axios from 'axios';

const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};

export { getUser };
