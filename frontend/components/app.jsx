import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

  </div>
);

export default App;