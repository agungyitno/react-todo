import React, { useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const todoListRef = useRef(null);
  const onSuccess = (res) => {
    todoListRef.current?.refetchList();
  };
  return (
    <>
      <header>
        <h2>ToDo List</h2>
      </header>
      <div className="card">
        <div className="card-header">
          <AddTodo onSuccess={onSuccess} />
        </div>
        <div className="card-body">
          <TodoList ref={todoListRef} />
        </div>
      </div>
    </>
  );
}
