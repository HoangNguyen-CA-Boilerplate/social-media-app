import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  isAuthenticated: false,
  user: null,
};

const defaultError = 'something went wrong';

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;

      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = defaultError;
      }
    },
    registerRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      state.loading = false;
    },
    registerFail: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = defaultError;
      }
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
    if (e.response) {
      dispatch(loginFail(e.response.data.error));
    } else {
      dispatch(loginFail());
    }
  }
};

export const register = (email, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await axios.post('/api/users/register', { email, password });
    dispatch(registerSuccess(res.data.user));
  } catch (e) {
    if (e.response) {
      dispatch(registerFail(e.response.data.error));
    } else {
      dispatch(registerFail());
    }
  }
};

export default authSlice.reducer;
