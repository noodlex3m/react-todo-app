function TodoItem({ todo, onToggle }) {
  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
    </li>
  );
}

export default TodoItem;
