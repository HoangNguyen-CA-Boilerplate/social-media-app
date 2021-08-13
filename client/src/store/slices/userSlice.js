import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

export const initialState = {
  userStatus: 'initial',
  user: null,
  userError: '',
  postsStatus: 'initial', // initial, loading, success, fail
  posts: [],
  postsError: '',
};

const defaultError = 'something went wrong';

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ username }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/${username}/`);
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  'user/getUserPosts',
  async ({ username }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/${username}/posts`);
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  'user/deleteUserPost',
  async (id, { rejectWithValue, getState }) => {
    try {
      const res = await axios.delete(`/api/posts/${id}`, tokenConfig(getState));
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const likeUserPost = createAsyncThunk(
  'user/likeUserPost',
  async (id, { rejectWithValue, getState }) => {
    try {
      const res = await axios.patch(
        `/api/posts/${id}/like`,
        {},
        tokenConfig(getState)
      );
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const followUser = createAsyncThunk(
  'user/followUser',
  async (username, { rejectWithValue, getState }) => {
    try {
      const res = await axios.patch(
        `/api/users/${username}/follow`,
        {},
        tokenConfig(getState)
      );
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.userStatus = 'loading';
      state.error = '';
    },
    [getUser.fulfilled]: (state, action) => {
      state.userStatus = 'success';
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.userStatus = 'fail';
      state.error = action.payload;
    },
    [getUserPosts.pending]: (state) => {
      state.postsStatus = 'loading';
      state.error = '';
    },
    [getUserPosts.fulfilled]: (state, action) => {
      state.postsStatus = 'success';
      state.posts = action.payload;
    },
    [getUserPosts.rejected]: (state, action) => {
      state.postsStatus = 'fail';
      state.error = action.payload;
    },
    [deleteUserPost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    },
    [likeUserPost.fulfilled]: (state, action) => {
      const found = state.posts.find((post) => post._id === action.payload._id);
      found.likes = action.payload.likes;
    },
    [followUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const selectUserPosts = (state) => state.user.posts;
export const selectUserPostsStatus = (state) => state.user.postsStatus;
export const selectUserPostsError = (state) => state.posts.postsError;

export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.userStatus;
export const selectUserError = (state) => state.user.userError;
