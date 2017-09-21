import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <div className="nav">
      </div>
    </header>

    <Switch>
      <AuthRoute exact path="/" component={NavBarContainer} />
      <AuthRoute exact path="/signup" component={NavBarContainer} />
      <ProtectedRoute path='/index' component={GreetingContainer} />
      <Route path='/' component={() => <Redirect to='/index' />} />
    </Switch>

  </div>
);
// <NavBarContainer />

export default App;
