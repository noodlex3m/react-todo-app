import { useState } from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Вивчити основи React", isCompleted: true },
    { id: 2, text: "Створити To-Do застосунок", isCompleted: false },
    { id: 3, text: "Підкорити світ", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Мій список завдань</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
