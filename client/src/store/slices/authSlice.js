import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loginStatus: 'idle', // idle | loading | success | fail
  signupStatus: 'idle',
  loginError: '',
  signupError: '',
  isAuth: false,
  user: null,
};

const defaultError = 'something went wrong';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/users/login', { email, password });
      return res.data.user;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/users/register', { email, password });
      return res.data.user;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
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
    },
  },
  extraReducers: {
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
      state.user = action.payload;
    },
    [signup.fulfilled]: (state, action) => {
      state.signupStatus = 'success';
      state.isAuth = true;
      state.user = action.payload;
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
