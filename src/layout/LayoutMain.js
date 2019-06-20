import React from "react";
import Header from "./Header";

const LayoutMain = ({ children, header }) => {
  return (
    <div>
      <Header {...header} />
      <div
        id="content"
        style={{ paddingTop: "0rem", paddingBottom: "4rem" }}
        className="container-fluid">
        <div className="container my-4">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default LayoutMain;
