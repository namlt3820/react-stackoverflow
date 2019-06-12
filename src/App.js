import React from "react";
import LayoutMain from "./layout/LayoutMain";
import LayoutAuth from "./layout/LayoutAuth";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routers, routersAuth } from "./routers";
import "./App.css";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
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
              layout={LayoutMain}
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
              layout={LayoutAuth}
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
