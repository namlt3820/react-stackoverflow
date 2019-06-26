import React, { Component } from "react";

const ListSuggest = ({ list, onClick, type }) => (
  <div className="list-group">
    {list.map(item => (
      <button
        key={item._id}
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => onClick({ item, type })}
      >
        {item.name}
      </button>
    ))}
  </div>
);

export default ListSuggest;
