import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  posts: [],
  getPostsStatus: 'idle', // idle | loading | success | fail
  getPostsError: '',
};

const defaultError = 'something went wrong';

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
  },
});

export default postSlice.reducer;

export const selectPosts = (state) => state.post.posts;
export const selectGetPostsStatus = (state) => state.post.getPostsStatus;
