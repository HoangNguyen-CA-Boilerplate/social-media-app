export const login = async (email, password) => {
  const res = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),

    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.text();
  return data;
};
export const register = async (email, password) => {
  const res = await fetch('/api/users/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),

    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.text();
  return data;
};
