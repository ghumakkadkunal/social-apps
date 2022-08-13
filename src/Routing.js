import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
//   Link,
} from "react-router-dom";

const home = lazy(() => import("./Components/Homepage/Homepage"));
// const social = lazy(() => import("./Components/Social/Social"));

const RoutingComponent = (props) => {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          {/* <Route exact path="/social-apps" component={social} /> */}
          <Route exact path="/social-apps" component={home} />
          <Route exact path="/" render={() => <Redirect to="/social-apps" />} />
          <Route exact path="/*" render={() => <Redirect to="/social-apps" />} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RoutingComponent;
