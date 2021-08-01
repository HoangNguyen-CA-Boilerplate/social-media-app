import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import store from './store/store';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router';

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme1}>{children}</ThemeProvider>
      </Provider>
    </MemoryRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
