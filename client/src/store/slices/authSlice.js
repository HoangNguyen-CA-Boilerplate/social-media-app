import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

export const initialState = {
  loginStatus: 'idle', // idle | loading | success | fail
  signupStatus: 'idle',
  loginError: '',
  signupError: '',
  isAuth: null,
  user: null,
  token: localStorage.getItem('token'),
};

const defaultError = 'something went wrong';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const res = await axios.get('/api/users/', tokenConfig(getState));
      return res.data.user;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.loginStatus = 'idle';
      state.signupStatus = 'idle';
      state.token = null;

      localStorage.removeItem('token');
    },
  },
  extraReducers: {
    [loadUser.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    [loadUser.rejected]: (state) => {
      state.isAuth = false;
      localStorage.removeItem('token');
    },
    [login.pending]: (state) => {
      state.loginStatus = 'loading';
      state.loginError = '';
    },
    [signup.pending]: (state) => {
      state.signupStatus = 'loading';
      state.signupError = '';
    },
    [login.fulfilled]: (state, action) => {
      state.loginStatus = 'success';
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    [signup.fulfilled]: (state, action) => {
      state.signupStatus = 'success';
      state.isAuth = true;
      state.user = action.payload;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    [login.rejected]: (state, action) => {
      state.loginStatus = 'fail';
      state.isAuth = false;
      state.loginError = action.payload;
    },

    [signup.rejected]: (state, action) => {
      state.signupStatus = 'fail';
      state.isAuth = false;
      state.signupError = action.payload;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectLoginError = (state) => state.auth.loginError;
export const selectSignupError = (state) => state.auth.signupError;
