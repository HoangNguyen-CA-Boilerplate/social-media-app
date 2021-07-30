import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import store from './store/store';
import { Provider } from 'react-redux';

import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme1}>
          <Switch>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/'>
              <h1>Hello World</h1>
            </Route>
          </Switch>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
