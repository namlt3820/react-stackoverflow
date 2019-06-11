import React from "react";
import Header from "./Header";

const LayoutAuth = props => (
    <div>
        <Header />
        <div id="auth" style={{ padding: 50, background: "#eff0f1" }} className="container-fluid">
            <div className="container">
                <div className="">{props.children}</div>
            </div>
        </div>
    </div>
);

export default LayoutAuth;
