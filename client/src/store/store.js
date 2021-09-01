import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';
import userReducer from './slices/userSlice';
import fullpostReducer from './slices/fullpostSlice';
import userPostsReducer from './slices/userPostsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    user: userReducer,
    fullpost: fullpostReducer,
    userPosts: userPostsReducer,
  },
});
export default store;
