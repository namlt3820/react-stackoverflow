import React from "react";

const TagList = ({ list, onClick }) => (
  <div style={{ marginTop: "1rem", marginLeft: "-0.5rem" }}>
    {list.map((t, idx) => (
      <div
        style={{
          padding: ".5rem",
          backgroundColor: "#ddf6eb",
          border: "1px solid #9ad2b9",
          display: "inline-block",
          borderRadius: "0.5rem",
          marginLeft: "0.5rem"
        }}
        key={idx}
      >
        {t.name}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => onClick(t)}
        >
          &nbsp;
          <i className="fa fa-window-close" />
        </span>
      </div>
    ))}
  </div>
);

export default TagList;
