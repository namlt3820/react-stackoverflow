import React from "react";
import loadingGif from "../../assets/images/loading.gif";

export default function() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={loadingGif}
        alt="loading gif"
        style={{ width: "25px", height: "25px" }}
      />
    </div>
  );
}
