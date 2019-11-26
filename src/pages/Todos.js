import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store";

const Todos = () => {
  const { state, actions } = useAppContext();
  const { todos } = state;
  return (
    <>
      <h2>Todo List</h2>
      <Link to="/add-todo">Add Todo</Link>
      <table>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {todos.map((todo, index) => {
          return (
            <tr>
              <td>{todo.title}</td>
              <td>{todo.body}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Todos;
