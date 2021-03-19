
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/index'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar';
import adminlte from './Pages/adminlte';
import { RestuarantDescription } from './Pages/restuarantDescription';
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SignIn} exact ></Route>
        <Route path="/admin" component={adminlte} exact></Route>
        <Route path="/restuarant" component={RestuarantDescription} exact></Route>
      </Switch>

    </Router>
  );
}

export default App;
