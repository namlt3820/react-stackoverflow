import React from "react";
import Header from "./Header";

const LayoutMain = ({ children }) => {
    return (
        <div>
            <Header />
            <div id="content" style={{ paddingTop: "0rem", paddingBottom: "4rem" }} className="container-fluid">
                <div className="container my-4">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default LayoutMain;
