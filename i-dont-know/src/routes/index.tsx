import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../main';
import SignIn from '../_signin';
import SignUp from '../_signup';
import ForUsers from '../forUsers';
import ForBusiness from '../forBusiness';
import Explore from '../explore';

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
