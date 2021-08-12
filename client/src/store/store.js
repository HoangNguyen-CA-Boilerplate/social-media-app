import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';
import userReducer from './slices/userSlice';
import fullpostReducer from './slices/fullpostSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    user: userReducer,
    fullpost: fullpostReducer,
  },
});
export default store;
