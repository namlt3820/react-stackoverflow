import React from "react";
import LayoutMain from "./layout/LayoutMain";
import LayoutAuth from "./layout/LayoutAuth";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routers, routersAuth } from "./routers";
import "./App.css";

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
        <Component {...props} />
    )}
  />
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routers.map((router, index) => (
            <AppRoute
              exact
              path={router.path}
              component={router.component}
              key={index}
            />
          ))}
        </Switch>
        <Switch>
          {routersAuth.map((auth, index) => (
            <AppRoute
              exact
              path={auth.path}
              component={auth.component}
              key={index}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
