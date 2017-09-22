import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page_container';
import PetIndexContainer from './pets/pet_index_container';

const App = () => (
  <div>
    <header>
    </header>

    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/signup" component={SplashPage} />
      <ProtectedRoute path='/index' component={PetIndexContainer} />
      <ProtectedRoute path='/pets' component={PetIndexContainer} />
      <Route path='/' component={() => <Redirect to='/index' />} />
    </Switch>

  </div>
);
// <NavBarContainer />

export default App;
