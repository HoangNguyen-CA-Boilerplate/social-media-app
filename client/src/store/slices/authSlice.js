import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      state.loading = false;
    },
    loginFail: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      state.loading = false;
    },
    registerFail: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

const {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
} = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  const res = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),

    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  dispatch(loginSuccess(data.user));
};

export const register = (email, password) => async (dispatch) => {
  dispatch(registerRequest());
  const res = await fetch('/api/users/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),

    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  dispatch(registerSuccess(data.user));
};

export default authSlice.reducer;
