import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

export const initialState = {
  posts: [],
  getPostsStatus: 'idle', // idle | loading | success | fail
  getPostsError: '',
  createPostStatus: 'idle',
  createPostError: '',
};

const defaultError = 'something went wrong';

export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ title, text }, { rejectWithValue, getState }) => {
    try {
      const res = await axios.post('/api/posts', tokenConfig(getState));
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/posts');
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

const postSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.getPostsStatus = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.getPostsStatus = 'success';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.getPostsStatus = 'fail';
      state.getPostsError = action.payload;
    },
    [createPost.pending]: (state) => {
      state.createPostStatus = 'loading';
    },
    [createPost.fulfilled]: (state, action) => {
      state.createPostStatus = 'success';
      state.posts.push(action.payload);
    },
    [createPost.rejected]: (state, action) => {
      state.createPostStatus = 'fail';
      state.createPostError = action.payload;
    },
  },
});

export default postSlice.reducer;

export const selectPosts = (state) => state.post.posts;
