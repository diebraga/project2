import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../_signin';
import Main from '../main';
import SignUp from '../_signup';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
  </Switch>
);

export default Routes;
