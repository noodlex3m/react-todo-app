import { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Додайте нове завдання"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default AddTodoForm;
