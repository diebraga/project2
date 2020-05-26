import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../_signin';
import Main from '../main';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/login" component={SignIn} />
  </Switch>
);

export default Routes;
