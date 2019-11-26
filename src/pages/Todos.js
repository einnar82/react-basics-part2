import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store";

const Todos = () => {
  const { state, actions } = useAppContext();
  const { todos } = state;

  const handleDeleteTodo = id => {
    actions.deleteTodo(id);
  };
  const renderTodo = () => {
    return todos.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
                <td>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <p>No available todo</p>
    );
  };

  return (
    <>
      <h2>Todo List</h2>
      <Link to="/add-todo">Add Todo</Link>
      {renderTodo()}
    </>
  );
};

export default Todos;
