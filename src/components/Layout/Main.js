import React from "react";
import Header from "./Header";

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            <div id="content" style={{paddingTop: '4rem', paddingBottom: '4rem'}} className="container-fluid">
                <div className="container">{children}</div>
            </div>
        </div>
    );
};
export default Main;
