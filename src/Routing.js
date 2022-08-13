import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
//   Link,
} from "react-router-dom";

const social = lazy(() => import("./Components/Social/Social"));

const RoutingComponent = (props) => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/social" component={social} />
          <Route exact path="/" render={() => <Redirect to="/social" />} />
          <Route exact path="/*" render={() => <Redirect to="/social" />} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RoutingComponent;
