import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Userplaces from './places/pages/Userplaces';

const App = (props) => {
  return (
  <Router>
    <MainNavigation />
    <main>
    <Switch>
      <Route path='/' exact><Users /></Route>
      <Route path='/:userId/places' exact>
        <Userplaces />
      </Route>
      <Route path='/places/new' exact><NewPlace /></Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </Router>
)}

export default App;
