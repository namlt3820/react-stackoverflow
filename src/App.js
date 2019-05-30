import React from "react";
// import Login from "./components/Auth/Login";
// import QuestionList from "./components/Home/QuestionList";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ForgotPassWord from "./components/Auth/ForgotPassWord";
import ActiveCode from "./components/Auth/ActiveCode";
import ChangPassWord from "./components/Auth/ChangPassWord";
import Main from "./components/Layout/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./general.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={SignUp} />
                        <Route exact path="/forgot-password" component={ForgotPassWord} />
                        <Route exact path="/active" component={ActiveCode} />
                        <Route exact path="/change-password" component={ChangPassWord} />
                    </Switch>
                </Main>
            </BrowserRouter>
        </div>
    );
}

export default App;
