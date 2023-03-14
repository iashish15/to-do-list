import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TodoList from "./component/TodoList";

function App() {
  const [data, updateData] = useState("");
  const [items, setItems] = useState([]);

  const onChange = (event) => {
    updateData(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, data];
    });
    updateData("");
  };
  const deleteItems = (id) => {
    console.log("heeeyy");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="App ">
        <div className="card">
          <h1 className="to-do-list">TO DO LIST</h1>
          <input onChange={onChange} value={data} placeholder="Add Items..." />
          <button onClick={listOfItems} disabled={data ? false : true}>
            Save
          </button>
          <ul>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  id={index}
                  key={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
