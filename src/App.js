import React from "react";
import Main from "./layout/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routers/router";
import "./general.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Main>
                    <Switch>
                        {routes.map((route, index) => {
                            return <Route exact path={route.path} component={route.component} key={index} />;
                        })}
                    </Switch>
                </Main>
            </BrowserRouter>
        </div>
    );
}
export default App;
