
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/index'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SignIn} exact ></Route>

      </Switch>

    </Router>
  );
}

export default App;
