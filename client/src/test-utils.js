import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import { Provider } from 'react-redux';
import authReducer from './store/slices/authSlice';
import { configureStore } from '@reduxjs/toolkit';

import { initialState } from './store/slices/authSlice';
import mockUser from './mocks/mockUser';

import { BrowserRouter } from 'react-router-dom';

const authState = {
  auth: {
    ...initialState,
    isAuth: true,
    user: mockUser,
  },
};

const customRender = (ui, { isAuth, route = '/', ...options } = {}) => {
  let preloadedState = {};
  if (isAuth) preloadedState = authState;

  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });

  const AllTheProviders = ({ children }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
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
