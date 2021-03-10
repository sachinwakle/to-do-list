import React, { useState } from "react";
import DenseAppBar from "./DenseAppBar";
import ToDoForm from "./ToDoForm";
import TaskGrid from "./TaskGrid";

function MainPage() {
  const [addToDo, setAddToDo] = useState(false);

  const openToDoForm = (open) => {
    setAddToDo(open);
  };

  return (
    <div>
      <DenseAppBar setTodoform={openToDoForm} todoform={addToDo} />
      <ToDoForm setTodoform={openToDoForm} todoform={addToDo} />
      <TaskGrid />
    </div>
  );
}

export default MainPage;
