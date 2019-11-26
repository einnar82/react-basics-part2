import React, { useState } from "react";
import { useAppContext } from "../store";
const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    body: ""
  });

  const { state, actions } = useAppContext();
  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = () => {
    const { todos } = state;
    const newTodo = Object.assign(todo, {
      ...todo,
      id: todos.length + 1
    });
    actions.addTodo(newTodo);
    setTodo({ title: "", body: "" });
  };
  return (
    <>
      <p>Title:</p>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
      />
      <br />
      <p>Body: </p>
      <input
        type="text"
        name="body"
        value={todo.body}
        onChange={handleInputChange}
      />
      <br />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

export default AddTodo;
