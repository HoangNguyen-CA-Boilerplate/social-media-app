import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { theme1 } from './themes';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme1}>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
