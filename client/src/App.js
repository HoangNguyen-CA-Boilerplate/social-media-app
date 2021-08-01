import { Switch, Route } from 'react-router-dom';

import Register from './auth/Register';
import Login from './auth/Login';
import AuthScreen from './auth/AuthScreen';

function App() {
  return (
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
  );
}

export default App;
