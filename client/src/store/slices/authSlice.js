import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loginStatus: 'idle', // idle | loading | success | fail
  registerStatus: 'idle',
  loginError: '',
  registerError: '',
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

export const register = createAsyncThunk(
  'auth/register',
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
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loginStatus = 'loading';
      state.loginError = '';
    },
    [register.pending]: (state) => {
      state.registerStatus = 'loading';
      state.registerError = '';
    },
    [login.fulfilled]: (state, action) => {
      state.loginStatus = 'success';
      state.isAuth = true;
      state.user = action.payload;
    },
    [register.fulfilled]: (state, action) => {
      state.registerStatus = 'success';
      state.isAuth = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loginStatus = 'fail';
      state.isAuth = false;
      state.loginError = action.payload;
    },

    [register.rejected]: (state, action) => {
      state.registerStatus = 'fail';
      state.isAuth = false;
      state.registerError = action.payload;
    },
  },
});

// export const login = (email, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const res = await axios.post('/api/users/login', { email, password });
//     dispatch(loginSuccess(res.data.user));
//   } catch (e) {
//     if (e.response) {
//       dispatch(loginFail(e.response.data.error));
//     } else {
//       dispatch(loginFail());
//     }
//   }
// };

// export const register = (email, password) => async (dispatch) => {
//   dispatch(registerRequest());
//   try {
//     const res = await axios.post('/api/users/register', { email, password });
//     dispatch(registerSuccess(res.data.user));
//   } catch (e) {
//     if (e.response) {
//       dispatch(registerFail(e.response.data.error));
//     } else {
//       dispatch(registerFail());
//     }
//   }
// };

export default authSlice.reducer;

export const selectIsAuth = (state) => state.auth.isAuth;
