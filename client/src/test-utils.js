import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer, { initialState } from './store/slices/authSlice';
import postsReducer from './store/slices/postsSlice';
import userReducer from './store/slices/userSlice';
import fullpostReducer from './store/slices/fullpostSlice';

import mockUser from './mocks/mockUser';

const authState = {
  auth: {
    ...initialState,
    isAuth: true,
    user: mockUser,
    token: 'Bearer token',
  },
};

const customRender = (ui, { isAuth, route = '/', ...options } = {}) => {
  let preloadedState = {};
  if (isAuth) preloadedState = authState;

  const store = configureStore({
    reducer: {
      auth: authReducer,
      posts: postsReducer,
      user: userReducer,
      fullpost: fullpostReducer,
    },
    preloadedState,
  });

  const AllTheProviders = ({ children }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  };

  window.history.pushState({}, 'Test Screen', route);
  render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
