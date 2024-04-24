import React, { useState } from "react";
import Input from "./components/input";
import Filtered from "./components/filter";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState(["Learn Javascript", "Do code Practice", "Solve Error"]);
  const addList = (inputText) => {
    if (inputText !== "") setTodoList([...todoList, inputText]);
  };

  const deleteItem = (key) => {
    let newTodo = [...todoList];
    newTodo.splice(key, 1);
    setTodoList([...newTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList} />
        <h2 className="text-white">Todo List</h2>
        <hr />
        {todoList.map((listItem, i) => (
          <Filtered key={i} index={i} item={listItem} remove={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
