function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Видалити</button>
    </li>
  );
}

export default TodoItem;
