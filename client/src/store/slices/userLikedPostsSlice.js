import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

const initialState = {
  postsStatus: 'initial', // initial, loading, success, fail
  posts: [],
  postsError: '',
};

const defaultError = 'network error';

export const getPosts = createAsyncThunk(
  'userLikedPosts/getPosts',
  async ({ username }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/${username}/posts/liked`);
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const deletePost = createAsyncThunk(
  'userLikedPosts/deletePost',
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

export const likePost = createAsyncThunk(
  'userLikedPosts/likePost',
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

const userSlice = createSlice({
  name: 'userLikedPosts',
  initialState,

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.postsStatus = 'loading';
      state.postsError = '';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postsStatus = 'success';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.postsStatus = 'fail';
      state.postsError = action.payload;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    },

    [likePost.fulfilled]: (state, action) => {
      const found = state.posts.find((post) => post._id === action.payload._id);
      found.likes = action.payload.likes;
    },
  },
});

export default userSlice.reducer;

export const selectUserLikedPosts = (state) => state.userLikedPosts.posts;
export const selectUserLikedPostsStatus = (state) =>
  state.userLikedPosts.postsStatus;
export const selectUserLikedPostsError = (state) =>
  state.userLikedPosts.postsError;
