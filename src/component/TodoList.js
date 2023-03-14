import React, { useState } from "react";
import "../App.css";

const TodoList = (props) => {
  return (
    <div className="list-button">
      <li>{props.text}</li>
      <button
        className="btn"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoList;
