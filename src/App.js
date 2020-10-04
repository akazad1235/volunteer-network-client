import React, { createContext,useState } from 'react';

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
import EventTask from './components/EventTask/EventTask';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

   const [loggedInUser, setLoggedInUser] = useState({});

  return (
   <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <p>Email: {loggedInUser.email}</p>
      
      <Router>
        <Switch>

        <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path='/register/:id'>
          <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute> */}
          <PrivateRoute path="/eventActivitis">
            <EventTask></EventTask>
         </PrivateRoute>
         <Route path="/admin">
            <Admin></Admin>
         </Route>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>

      </UserContext.Provider>
      </div>
  );
}

export default App;
