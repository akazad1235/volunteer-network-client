import React from 'react';

import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Event from './components/Event/Event';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="container">
     
      
      <Router>
        <Switch>
          
          <Route path="/event/:id">
           <Event></Event>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>

      
    </div>
    
  );
}

export default App;
