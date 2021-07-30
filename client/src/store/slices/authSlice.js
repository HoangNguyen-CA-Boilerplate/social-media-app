import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
  try {
    const res = await axios.post('/api/users/login', { email, password });
    dispatch(loginSuccess(res.data.user));
  } catch (e) {
    dispatch(loginFail());
  }
};

export const register = (email, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await axios.post('/api/users/register', { email, password });
    dispatch(registerSuccess(res.data.user));
  } catch (e) {
    dispatch(registerFail());
  }
};

export default authSlice.reducer;
