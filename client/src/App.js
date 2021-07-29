import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
        <Route path='/'>
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
