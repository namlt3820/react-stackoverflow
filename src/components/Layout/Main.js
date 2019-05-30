import React from "react";
import Header from "./Header";

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            <div id="content">{children}</div>
        </div>
    );
};
export default Main;
