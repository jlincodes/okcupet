import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import {AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="nav">
        <NavBarContainer />
      </div>
    </header>


  </div>
);

export default App;
