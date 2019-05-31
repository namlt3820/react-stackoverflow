import React from "react";
import User from './components/User'
import Home from "./components/Questions/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ForgotPassWord from "./components/Auth/ForgotPassWord";
import ActiveCode from "./components/Auth/ActiveCode";
import ChangPassWord from "./components/Auth/ChangPassWord";
import QuestionList from './components/Questions/QuestionList'
import TopicList from './components/Topics/TopicList'
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
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={SignUp} />
                        <Route path="/forgot-password" component={ForgotPassWord} />
                        <Route path="/active" component={ActiveCode} />
                        <Route path="/change-password" component={ChangPassWord} />
                        <Route path="/my-profile" component={User} />
                        <Route path="/my-questions" component={QuestionList}/>
                        <Route path="/my-topics" component={TopicList}/>
                    </Switch>
                </Main>
            </BrowserRouter>
        </div>
    );
}
export default App;
