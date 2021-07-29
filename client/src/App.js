import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
