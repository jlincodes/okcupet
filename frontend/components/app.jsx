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
import PetShowContainer from './pets/pet_show_container';
import UserShowContainer from './users/user_show_container';
import ConversationIndexContainer
  from './conversation/conversation_index_container';
import ConversationShowContainer
  from './conversation/conversation_show_container';

const App = () => (
  <div>
    <header>
    </header>

    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/signup" component={SplashPage} />
      <ProtectedRoute path='/users/:userId' component={UserShowContainer} />
      <ProtectedRoute path='/pets/:petId' component={PetShowContainer} />
      <ProtectedRoute path="/messages/:conversationId" 
        component={ConversationShowContainer} />
      <ProtectedRoute path="/messages" component={ConversationIndexContainer} />
      <ProtectedRoute path='/index' component={PetIndexContainer} />
      <Route path='/' component={() => <Redirect to='/index' />} />
    </Switch>

  </div>
);
// <NavBarContainer />

export default App;
