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
      {Object.keys(todo).map((item, index) => {
        return (
          <React.Fragment key={index}>
            <p>{item}: </p>
            <input
              type="text"
              name={item}
              value={todo[item]}
              onChange={handleInputChange}
            />
            <br />
          </React.Fragment>
        );
      })}
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

export default AddTodo;
