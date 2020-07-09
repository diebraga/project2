import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import SignIn from '../pages/_signin';
import SignUp from '../pages/_signup';
import ForUsers from '../pages/forUsers';
import ForBusiness from '../pages/forBusiness';
import Explore from '../pages/explore';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/forusers" component={ForUsers} />
    <Route path="/forbusiness" component={ForBusiness} />
    <Route path="/explore" component={Explore} />
  </Switch>
);

export default Routes;

/**
 *   Routes are responsible to manage all routes
 *   of the application.
 */
