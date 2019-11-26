import React, { useState, useEffect } from "react";
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
    actions.addTodo(todo);
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
