
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/index'
import SignIn from './Pages/SignIn'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SignIn} exact ></Route>

      </Switch>

    </Router>
  );
}

export default App;
