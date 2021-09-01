import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';
import userReducer from './slices/userSlice';
import fullpostReducer from './slices/fullpostSlice';
import userPostsReducer from './slices/userPostsSlice';
import userLikedPostsReducer from './slices/userLikedPostsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    user: userReducer,
    fullpost: fullpostReducer,
    userPosts: userPostsReducer,
    userLikedPosts: userLikedPostsReducer,
  },
});
export default store;
