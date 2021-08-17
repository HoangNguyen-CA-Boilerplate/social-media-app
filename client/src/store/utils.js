export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {},
  };
  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
};
