import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import store from './store/store';
import { Provider } from 'react-redux';

import Register from './auth/Register';
import Login from './auth/Login';
import AuthScreen from './auth/AuthScreen';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme1}>
          <Switch>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/home'>
              <h1>Home</h1>
            </Route>
            <Route exact path='/'>
              <AuthScreen />
            </Route>
          </Switch>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
