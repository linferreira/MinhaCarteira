import React from "react";

import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/index";

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
  </Switch>
);

export default AuthRoutes;
