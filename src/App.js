import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routers, routersAuth } from "./routers";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./store/actions/userAction";

const AppRoute = ({ component: Component, ...rest }) => <Route {...rest} render={props => <Component {...props} />} />;

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        if (window.localStorage["access_token"]) {
            dispatch(getCurrentUser());
        }
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        {routers.map((router, index) => (
                            <AppRoute exact path={router.path} component={router.component} key={index} />
                        ))}
                    </Switch>
                    <Switch>
                        {routersAuth.map((auth, index) => (
                            <AppRoute exact path={auth.path} component={auth.component} key={index} />
                        ))}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect()(App);
