import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

export const initialState = {
  status: 'initial', // initial, loading, success, fail
  posts: [],
  error: '',
  createStatus: 'initial',
  createError: '',
};

const defaultError = 'network error';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/posts');
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
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

export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ text }, { rejectWithValue, getState }) => {
    try {
      const res = await axios.post(
        `/api/posts/`,
        { text },
        tokenConfig(getState)
      );
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const likePost = createAsyncThunk(
  'posts/likePost',
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

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'fail';
      state.error = action.payload;
    },

    [createPost.pending]: (state) => {
      state.createStatus = 'loading';
      state.createError = '';
    },
    [createPost.fulfilled]: (state, action) => {
      state.createStatus = 'success';
      state.posts.unshift(action.payload);
    },
    [createPost.rejected]: (state, action) => {
      state.createStatus = 'fail';
      state.createError = action.payload;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    },
    [likePost.fulfilled]: (state, action) => {
      let found = state.posts.find((post) => post._id === action.payload._id);
      found.likes = action.payload.likes;
    },
  },
});

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;

export const selectCreateStatus = (state) => state.posts.createStatus;
export const selectCreateError = (state) => state.posts.createError;
