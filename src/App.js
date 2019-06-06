import React from "react";
import Main from "./layout/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routers from "./routers";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Main>
                    <Switch>
                        {routers.map((router, index) => {
                            return <Route exact path={router.path} component={router.component} key={index} />;
                        })}
                    </Switch>
                </Main>
            </BrowserRouter>
        </div>
    );
}
export default App;
