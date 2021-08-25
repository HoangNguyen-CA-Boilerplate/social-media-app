import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenConfig } from '../utils';

export const initialState = {
  postStatus: 'initial', // initial, loading, success, fail
  post: {},
  postError: '',
};

const defaultError = 'network error';

export const getPost = createAsyncThunk(
  'fullpost/getPost',
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const deletePost = createAsyncThunk(
  'fullpost/deletePost',
  async ({ id, history }, { rejectWithValue, getState }) => {
    try {
      const res = await axios.delete(`/api/posts/${id}`, tokenConfig(getState));
      history.push('/home');
      return res.data;
    } catch (e) {
      if (e.response) return rejectWithValue(e.response.data.error);
      return rejectWithValue(defaultError);
    }
  }
);

export const likePost = createAsyncThunk(
  'fullpost/likePost',
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
  name: 'fullpost',
  initialState,
  reducers: {},

  extraReducers: {
    [getPost.pending]: (state) => {
      state.postStatus = 'loading';
      state.postError = '';
    },
    [getPost.fulfilled]: (state, action) => {
      state.postStatus = 'success';
      state.post = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.postStatus = 'fail';
      state.postError = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {},
    [likePost.fulfilled]: (state, action) => {
      state.post.likes = action.payload.likes;
    },
  },
});

export default postsSlice.reducer;

export const selectDeleted = (state) => state.fullpost.deleted;
export const selectPost = (state) => state.fullpost.post;
export const selectPostStatus = (state) => state.fullpost.postStatus;
export const selectPostError = (state) => state.fullpost.postError;
