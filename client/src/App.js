import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
