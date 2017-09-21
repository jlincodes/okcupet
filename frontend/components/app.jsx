import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';

const App = () => (
  <div>
    <header>
      <div className="nav">
        <NavBarContainer />
      </div>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;
